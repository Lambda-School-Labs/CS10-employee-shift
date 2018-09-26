from django.urls import path, include
from django.contrib.auth.models import User, Group
from django.contrib import admin
admin.autodiscover()

from rest_framework import generics, permissions, serializers
from rest_framework.filters import (
        SearchFilter,
        OrderingFilter
    )
from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope, TokenHasScope
from .permissions import IsAuthenticatedOrCreate, IsOwnerOrReadOnly
from shiftapp.serializers import (
    UserSerializer,
    ProfileSerializer,
    UserProfileSerializer, 
    GroupSerializer, 
    AccountSerializer, 
    RequestedTimeOffSerializer, 
    ShiftSerializer, 
    HourOfOperationSerializer, 
    AvailabilitySerializer
)

from rest_framework import viewsets, status
from rest_framework.response import Response
from shiftapp.models import Profile, Account, RequestedTimeOff, Shift, HourOfOperation, Availability
# Create the API views


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    # required_scopes = ['groups']
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class SignUp(generics.CreateAPIView):
    # permission_classes = (IsAuthenticatedOrCreate,)
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer


class AccountViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]
    serializer_class = AccountSerializer
    queryset = Account.objects.all()

class ProfileViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    # permission_classes = [IsOwnerOrReadOnly]
    queryset = Profile.objects.all()

    serializer_class = ProfileSerializer
    filter_backends = [SearchFilter]
    search_fields = ['user__username', 'user__first_name']

    def get_queryset(self, *args, **kwargs):
        queryset = Profile.objects.all()
        username = self.request.query_params.get('username', None)
        if username is not None:
            queryset = queryset.filter(user__username=username)
        return queryset

class UserProfileViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    # permission_classes = [IsOwnerOrReadOnly]
    queryset = Profile.objects.none()

    serializer_class = UserProfileSerializer

    def get_queryset(self, *args, **kwargs):
        user = self.request.user
        print(user)

        if user.is_anonymous:
            return Profile.objects.none()
        else:
            return Profile.objects.filter(user=user)


class RequestedTimeOffViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    serializer_class = RequestedTimeOffSerializer
    queryset = RequestedTimeOff.objects.all()

    def get_queryset(self, *args, **kwargs):
        user = self.request.user
        print(user)

        if user.is_anonymous:
            return RequestedTimeOff.objects.none()
        else:
            return RequestedTimeOff.objects.filter(profile__user=user)

class ShiftViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    serializer_class = ShiftSerializer
    queryset = Shift.objects.all()

    def get_queryset(self, *args, **kwargs):
        user = self.request.user
        print(user)

        if user.is_anonymous:
            return Shift.objects.none()
        else:
            return Shift.objects.filter(profile__user=user)

class HourOfOperationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    serializer_class = HourOfOperationSerializer
    queryset = HourOfOperation.objects.all()

class AvailabilityViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    serializer_class = AvailabilitySerializer
    queryset = Availability.objects.all()




