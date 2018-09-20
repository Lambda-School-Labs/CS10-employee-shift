from django.urls import path, include
from django.contrib.auth.models import User, Group
from django.contrib import admin
admin.autodiscover()

from rest_framework import generics, permissions, serializers

from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope, TokenHasScope
from .permissions import IsAuthenticatedOrCreate
from shiftapp.serializers import UserSerializer, GroupSerializer, AccountSerializer, ProfileSerializer, RequestedTimeOffSerializer, ShiftSerializer, HourOfOperationSerializer, AvailabilitySerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from shiftapp.models import Profile, Account, RequestedTimeOff, Shift, HourOfOperation, Availability
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
    serializer_class = UserSerializer


class AccountList(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    serializer_class = AccountSerializer
    queryset = Account.objects.all()
    

class ProfileList(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
       

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

class AvailabilityList(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    serializer_class = AvailabilitySerializer
    queryset = Availability.objects.all()




