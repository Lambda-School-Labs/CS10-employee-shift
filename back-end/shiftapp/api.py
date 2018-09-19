from django.urls import path, include
from django.contrib.auth.models import Group
from django.contrib import admin
admin.autodiscover()

from rest_framework import generics, permissions, serializers

from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope, TokenHasScope
from .permissions import IsAuthenticatedOrCreate
from shiftapp.serializers import UserSerializer, GroupSerializer, SignUpSerializer, EmployerSerializer, EmployeeSerializer, DaySerializer, CalendarDaySerializer, RequestedTimeOffSerializer, ShiftSerializer, HourOfOperationSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from shiftapp.models import User, Employee, Employer, Day, CalendarDay, RequestedTimeOff, Shift, HourOfOperation
# Create the API views


class UserList(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetails(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GroupList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated, TokenHasScope]
    required_scopes = ['groups']
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class SignUp(generics.CreateAPIView):
    # permission_classes = (IsAuthenticatedOrCreate,)
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = SignUpSerializer



class EmployerList(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    serializer_class = EmployerSerializer
    queryset = Employer.objects.all()
    
class EmployeeList(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()
    
class DayList(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Day.objects.all()
    serializer_class = DaySerializer
    
class CalendarDayList(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    serializer_class = CalendarDaySerializer
    queryset = CalendarDay.objects.all()

class RequestedTimeOffList(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    serializer_class = RequestedTimeOffSerializer
    queryset = RequestedTimeOff.objects.all()

class ShiftList(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    serializer_class = ShiftSerializer
    queryset = Shift.objects.all()

class HourOfOperationList(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    serializer_class = HourOfOperationSerializer
    queryset = HourOfOperation.objects.all()




