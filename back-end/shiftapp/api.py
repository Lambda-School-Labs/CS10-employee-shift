from django.urls import path, include
from django.contrib.auth.models import User, Group
from django.contrib import admin
admin.autodiscover()

from rest_framework import generics, permissions, serializers

from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope, TokenHasScope
from .permissions import IsAuthenticatedOrCreate
from shiftapp.serializers import UserSerializer, GroupSerializer, SignUpSerializer, EmployerSerializer, EmployeeSerializer, DaySerializer, AvailabilitySerializer, CalendarDaySerializer, RequestedTimeOffSerializer, ShiftSerializer, HourOfOperationSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from shiftapp.models import Employee, Employer, Day, Availability, CalendarDay, RequestedTimeOff, Shift, HourOfOperation
# Create the API views


class UserList(generics.ListCreateAPIView):
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

    # request = .request.data

    # def post(self, request, *args, **kwargs):
    #   serializer = UserSerializer(data=request)
    #   print(request.data)
      # user = User.create(request, *args, **kwargs)
      # user.is_superuser = False
      # user.save()
      # user = User.objects.create_user(**kwargs)
    #   user.is_superuser = False
    #   user.save()
    # password = request.data['password']
    # password1 = request.data["password1"]
      # if password1 != password:
      #   raise serializers.ValidationError("The password doesn't match.")
      # if serializer.is_valid():
      #   serializer.save()
      #   return Response(serializer.data, status=status.HTTP_201_CREATED)
      # raise Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

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
    serializer_class = DaySerializer
    queryset = Day.objects.all()

class AvailabilityList(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    serializer_class = AvailabilitySerializer
    queryset = Availability.objects.all()

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




