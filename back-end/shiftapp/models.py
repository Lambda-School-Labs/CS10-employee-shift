from django.db import models
from uuid import uuid4
from django.contrib.auth.models import User
from django.urls import reverse
from django.contrib.auth.models import AbstractUser
from django.conf import settings


class User(AbstractUser):
    telephone = models.CharField(max_length=14)
    birth_date = models.DateField(null=True, blank=True)

class Employer(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    company_name = models.CharField(max_length=200)

    def __str__(self):
      return self.company_name

class HourOfOperation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)

    start_time = models.TimeField(auto_now=False, auto_now_add=False)
    end_time = models.TimeField(auto_now=False, auto_now_add=False)

class CalendarDay(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    employer = models.ForeignKey(Employer, on_delete=models.CASCADE)
    hour_of_operation = models.ForeignKey(HourOfOperation, on_delete=models.CASCADE)

    date = models.DateField(auto_now_add=False)
    is_active = models.BooleanField(default=True)
    is_holiday = models.BooleanField(default=False)
    is_weekend = models.BooleanField(default=False)
    
class Employee(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    employer = models.ForeignKey(Employer, on_delete=models.CASCADE)

class RequestedTimeOff(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)

    date = models.DateField(auto_now_add=False)
    reason = models.CharField(max_length=200)
    is_approved = models.BooleanField(default=False)
    
class Day(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    day_name = models.CharField(max_length=15)
    abbreviation_name = models.CharField(max_length=1)

    def __str__(self):
      return self.day_name 
    
    
class Shift(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    calendarday = models.ForeignKey(CalendarDay, on_delete=models.CASCADE)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    day = models.ForeignKey(Day, on_delete=models.CASCADE)

    start_time = models.TimeField(auto_now=False, auto_now_add=False)
    end_time = models.TimeField(auto_now=False, auto_now_add=False)
    status = models.BooleanField(default=True)
    is_available = models.BooleanField(default=True)