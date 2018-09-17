from django.contrib.auth.models import User, Group
from shiftapp.models import Employee, Employer, Availability, Day, CalendarDay, RequestedTimeOff, Shift, HourOfOperation
from rest_framework import serializers, viewsets

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')
    
class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class EmployerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employer
        fields = ('id', 'user', 'name', 'telephone')
        

class DaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Day
        fields = ('id', 'name', 'abbreviation_name')


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('id', 'user', 'employer', 'telephone')
  

class AvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Availability
        fields = ('id', 'employee', 'day', 'start_hour', 'end_hour')
    
class CalendarDaySerializer(serializers.ModelSerializer):
    class Meta:
        model = CalendarDay
        fields = ('id', 'employer', 'hour_of_operation', 'date', 'is_active', 'is_holiday', 'is_weekend')

class RequestedTimeOffSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestedTimeOff
        fields = ('id', 'employee', 'date', 'reason', 'is_approved')

class ShiftSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shift
        fields = ('id', 'calendar_day', 'employee', 'start_hour', 'end_hour' 'status')
        
class HourOfOperationSerializer(serializers.ModelSerializer):
    class Meta:
        model = HourOfOperation
        fields = ('id', 'start_hour', 'end_hour')
    