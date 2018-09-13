from django.db import models
from uuid import uuid4
from django.contrib.auth.models import User

class Employer(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    name = models.CharField(max_length=200)
    telephone = models.CharField(max_length=14)

    def __str__(self):
      return self.name

class HourOfOperation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)

    start_hour = models.TimeField(auto_now=False, auto_now_add=False)
    end_hour = models.TimeField(auto_now=False, auto_now_add=False)

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
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    employer = models.ForeignKey(Employer, on_delete=models.CASCADE)

    telephone = models.CharField(max_length=14)

class RequestedTimeOff(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)

    date = models.DateField(auto_now_add=False)
    reason = models.CharField(max_length=200)
    is_approved = models.BooleanField(default=False)
    
class Day(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)

    name = models.CharField(max_length=15)
    abbreviation_name = models.CharField(max_length=1)

    def __str__(self):
      return self.name
      
class Availability(models.Model):
    
    class Meta:
        verbose_name_plural = "Availabilities"
    
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    
    day = models.ForeignKey(Day, on_delete=models.CASCADE)
    start_hour = models.TimeField(auto_now=False, auto_now_add=False)
    end_hour = models.TimeField(auto_now=False, auto_now_add=False)
    
class Shift(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    calendarday = models.ForeignKey(CalendarDay, on_delete=models.CASCADE)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)

    start_hour = models.TimeField(auto_now=False, auto_now_add=False)
    end_hour = models.TimeField(auto_now=False, auto_now_add=False)
    status = models.BooleanField(default=True)