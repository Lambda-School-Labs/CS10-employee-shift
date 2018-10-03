from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.http import HttpResponse
from django.views.decorators.http import require_http_methods
import json

import stripe

stripe.api_key = settings.STRIPE_SECRET_KEY
stripe.log = 'info'  # or 'debug'

# How it works - in 3 steps:
# 1. GET TOKEN_ID, DESCRIPTION, CURRENCY, AMOUNT FROM FRONTEND
"""
#2.
try:
    stripe.Charge.create(
            amount is in cents: i.e 999 is 9.99
            amount      = request.POST.get('amount', ''),
            currency    = request.POST.get('currency', ''),
            source      = request.POST.get('source', ''), #token.id
            description = request.POST.get('description', '')
            statement_descriptor will appear in user's credit card statement
            statement_descriptor = "Company XYX",
            metadata={"order_id": 123456}
            )
            Statement descriptors are limited to 22 characters, cannot use the
            special characters <, >, ', or ", and must not consist solely of numbers.
            metadata is the opposite and will only appear in your DASHBOARD(e.g when
            looking at the page for an individual charge) and is also available in common
            reports and exports. As an example, your store's order ID can be attached to
            the charge used to pay for that order.
            (!!! DONT STORE ANY SENSITIVE INFORMATION - CARD DETAILS ETC as metadata or
            in the charge's description parameter)
"""
# 3 Return response to my frontend to display a confirmation / error

"""
- Optional: #2 can create a new model instance storing the customers_payment i.e
name, address of customer,
"""


@require_http_methods(['POST'])
@csrf_exempt
def checkout(request):
    try:
        charge = stripe.Charge.create(
            amount=request.POST.get('amount', ''),
            currency=request.POST.get('currency', ''),
            source=request.POST.get('source', ''),
            description=request.POST.get('description', ''),
            statement_descriptor="22 Characters max",
            metadata={'order_id': 12345}
        )

        # Only confirm an order after you have status: succeeded
        print("______STATUS_____", charge['status'])  # should be succeeded
        if charge['status'] == 'succeeded':
            return HttpResponse(json.dumps(
                {'message': 'Your transaction has been successful.'})
            )
        else:
            raise stripe.error.CardError
    except stripe.error.CardError as e:
        body = e.json_body
        err = body.get('error', {})
        print('Status is: %s' % e.http_status)
        print('Type is: %s' % err.get('type'))
        print('Code is: %s' % err.get('code'))
        print('Message is %s' % err.get('message'))
        return HttpResponse(
            json.dumps({"message": err.get('message')}),
            status=e.http_status
        )
    except stripe.error.RateLimitError as e:
        # Too many requests made to the API too quickly
        return HttpResponse(json.dumps({
            'message': "The API was not able to respond, try again."
        }))
    except stripe.error.InvalidRequestError as e:
        # invalid parameters were supplied to Stripe's API
        return HttpResponse(json.dumps({
            'message': "Invalid parameters, unable to process payment."
        }))
    except stripe.error.AuthenticationError as e:
        # Authentication with Stripe's API failed
        # (maybe you changed API keys recently)
        pass
    except stripe.error.APIConnectionError as e:
        # Network communication with Stripe failed
        return HttpResponse(json.dumps({
            'message': 'Network communication failed, try again.'
        }))
    except stripe.error.StripeError as e:
        # Display a very generic error to the user, and maybe
        # send yourself an email
        return HttpResponse(json.dumps({
            'message': 'Internal Error, contact support.'
        }))

    # Something else happened, completely unrelated to Stripe
    except Exception as e:
        return HttpResponse(json.dumps({
            'message': 'Unable to process payment, try again.'
        }))

# Add endpoint_secretkey here in localhost


endpoint_secret = settings.STRIPE_WEBHOOK_SECRET
print(endpoint_secret)

def my_webhook_view(request):
    # You can use webhooks to receive information about asynchronous payment events.
    # For more about our webhook events check out https://stripe.com/docs/webhooks.
    webhook_secret = os.getenv('STRIPE_WEBHOOK_SECRET')
    request_data = json.loads(request.data)

    if webhook_secret:
        # Retrieve the event by verifying the signature using the raw body and secret if webhook signing is configured.
        signature = request.headers.get('stripe-signature')
        try:
            event = stripe.Webhook.construct_event(payload=request.data, sig_header=signature, secret=webhook_secret)
            data = event['data']
        except Exception as e:
            return e
    else:
        data = request_data['data']

    data_object = data['object']

    # Monitor `source.chargeable` events.
    if data_object['object'] == 'source' \
            and data_object['status'] == 'chargeable' \
            and 'order' in data_object['metadata']:
        source = data_object
        print(f'Webhook received! The source {source["id"]} is chargeable')

        # Find the corresponding Order this Source is for by looking in its metadata.
        order = Inventory.retrieve_order(source['metadata']['order'])

        # Verify that this Order actually needs to be paid.
        order_status = order['metadata']['status']
        if order_status in ['pending', 'paid', 'failed']:
            return jsonify({'error': f'Order already has a status of {order_status}'}), 403

        # Create a Charge to pay the Order using the Source we just received.
        try:
            charge = stripe.Charge.create(source=source['id'], amount=order['amount'], currency=order['currency'],
                                          receipt_email=order['email'], idempotency_key=order['id'])

            if charge and charge['status'] == 'succeeded':
                status = 'paid'
            elif charge:
                status = charge['status']
            else:
                status = 'failed'

        except stripe.error.CardError:
            # This is where you handle declines and errors.
            # For the demo, we simply set the status to mark the Order as failed.
            status = 'failed'

        Inventory.update_order(properties={'metadata': {'status': status}}, order=order)

    # Monitor `charge.succeeded` events.
    if data_object['object'] == 'charge' \
            and data_object['status'] == 'succeeded' \
            and 'order' in data_object['source']['metadata']:
        charge = data_object
        print(f'Webhook received! The charge {charge["id"]} succeeded.')
        Inventory.update_order(properties={'metadata': {'status': 'paid'}},
                                   order_id=charge['source']['metadata']['order'])

    # Monitor `source.failed`, `source.canceled`, and `charge.failed` events.
    if data_object['object'] in ['source', 'charge'] and data_object['status'] in ['failed', 'canceled']:
        source = data_object['source'] if data_object['source'] else data_object
        print(f'Webhook received! Failure for {data_object["id"]}.`')

        if source['metadata']['order']:
            Inventory.update_order(properties={'metadata': {'status': 'failed'}},
                                       order_id=source['metadata']['order']['id'])

    return HttpResponse(status=200)
