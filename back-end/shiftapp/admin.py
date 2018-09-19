from django.contrib import admin
from .models import User, Employer, Employee, HourOfOperation, Shift, CalendarDay, Day, RequestedTimeOff

# Register your models here.
admin.site.register((User, Employer, Employee, HourOfOperation, Shift, CalendarDay, Day, RequestedTimeOff),)
