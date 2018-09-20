from django.db import models
from uuid import uuid4
from django.contrib.auth.models import User
from django.urls import reverse
from django.conf import settings


class Account(models.Model):
    logo = models.URLField(max_length=200)
    company = models.CharField(max_length=200)
    enabled = models.BooleanField(default=True)
    plan_expires = models.DateTimeField(auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.company


class HourOfOperation(models.Model):
    DAY_CHOICES = (
        ('M', 'Monday'),
        ('T', 'Tuesday'),
        ('W', 'Wednesday'),
        ('R', 'Thursday'),
        ('F', 'Friday'),
        ('S', 'Saturday'),
        ('U', 'Sunday')
    )
    
    account = models.ForeignKey(Account, on_delete=models.CASCADE)

    day = models.CharField(
        max_length=1,
        choices=DAY_CHOICES,
        default='M'
    )
    open_time = models.TimeField(auto_now=False, auto_now_add=False)
    close_time = models.TimeField(auto_now=False, auto_now_add=False)


class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)

    phone_number = models.CharField(max_length=14)
    notes = models.TextField(max_length=400)


class RequestedTimeOff(models.Model):
    STATUS_CHOICES = (
        ('P', 'Pending'),
        ('C', 'Canceled'), 
        ('A', 'Accepted'), 
        ('E', 'Expired')
    )

    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)

    start_datetime = models.DateTimeField(auto_now=False, auto_now_add=False)
    end_datetime = models.DateTimeField(auto_now=False, auto_now_add=False)
    reason = models.CharField(max_length=200)
    status = models.CharField(
        max_length=1,
        choices=STATUS_CHOICES,
        default='P'
    )

       
class Shift(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, on_delete=models.SET_NULL, blank=True, null=True)

    start_datetime =  models.DateTimeField(auto_now=False, auto_now_add=False)
    end_datetime =  models.DateTimeField(auto_now=False, auto_now_add=False)
    notes = models.TextField(max_length=400)
    is_open = models.BooleanField(default=True)


class Availability(models.Model):
    DAY_CHOICES = (
        ('M', 'Monday'),
        ('T', 'Tuesday'),
        ('W', 'Wednesday'),
        ('R', 'Thursday'),
        ('F', 'Friday'),
        ('S', 'Saturday'),
        ('U', 'Sunday')
    )
    
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)

    day = models.CharField(
        max_length=1,
        choices=DAY_CHOICES,
        default='M'
    )
    start_time = models.TimeField(auto_now=False, auto_now_add=False)
    end_time = models.TimeField(auto_now=False, auto_now_add=False)