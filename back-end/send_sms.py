from twilio.rest import Client
from django.conf import settings
import os

# Your Account SID from twilio.com/console
account_sid = "AC7f3185b0bf8fee0fa0420042343c7871"
# Your Auth Token from twilio.com/console
auth_token  = "4e6e06e41f1d741a0361d18583f30706"

client = Client(account_sid, auth_token)

message = client.messages.create(
    to="+12162098986", 
    from_="+15615135726",
    body="Hello from Myshift!")

print(message.sid)
