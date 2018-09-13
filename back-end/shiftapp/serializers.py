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
        fields = '__all__'
        

class DaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Day
        fields = '__all__'


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'
        depth = 10

class AvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Availability
        fields = '__all__'
        depth = 10

class CalendarDaySerializer(serializers.ModelSerializer):
    class Meta:
        model = CalendarDay
        fields = '__all__'
        depth = 10

class RequestedTimeOffSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestedTimeOff
        fields = '__all__'
        depth = 10

class ShiftSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shift
        fields = '__all__'
        depth = 10

class HourOfOperationSerializer(serializers.ModelSerializer):
    class Meta:
        model = HourOfOperation
        fields = '__all__'
        depth = 10