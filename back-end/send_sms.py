from twilio.rest import Client
from django.conf import settings
import os

# Your Account SID from twilio.com/console
account_sid = os.getenv("TWILIO_ACCOUNT_SID")
# Your Auth Token from twilio.com/console
auth_token  = os.getenv("TWILIO_AUTH_TOKEN")

client = Client(settings.account_sid, settings.auth_token)

message = client.messages.create(
    to="+12162098986", 
    from_="+15615135726",
    body="Hello from Myshift!")

print(message.sid)
print(accout_sid)
print(auth_token)