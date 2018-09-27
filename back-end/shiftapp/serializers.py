from django.contrib.auth.models import User, Group, Permission
from rest_framework.serializers import ModelSerializer, ChoiceField
from rest_framework import serializers
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password, get_password_validators
from django.contrib.auth.hashers import make_password, check_password

from difflib import SequenceMatcher

from shiftapp.models import Profile, Account, Availability, RequestedTimeOff, Shift, HourOfOperation


class PermissionSerializer(ModelSerializer):
    class Meta:
        model = Permission
        fields = '__all__'

class GroupSerializer(ModelSerializer):
    permissions = PermissionSerializer(many=True)
    class Meta:
        model = Group
        fields = '__all__'
        # fields = ('url', 'name')


class UserSerializer(ModelSerializer): 
    # profiles = serializers.PrimaryKeyRelatedField(many=True, queryset=Profile.objects.all())

    groups = GroupSerializer(many=True)
    class Meta:
        model = User
        # fields = '__all__'
        fields = ('url', 'id', 'username','first_name', 'last_name', 'email', 'password', 'is_staff', 'groups')
        extra_kwargs = {
            'password': {'write_only': True},
            'is_superuser': {'read_only': True},
        }


    def validate_password(self, value):
      data = self.get_initial()
      request = self.context.get("request")
      user = request.user

      password = data.get("password")
      re_password = request.data["re_password"]

      if 'old_password' in request.data:
        old_user = User.objects.get(username=user)
        old_password = request.data["old_password"]
        if not check_password(old_password, old_user.password):
          raise serializers.ValidationError("Old password is incorrect")

      if re_password != value:
        raise serializers.ValidationError("The password doesn't match.")
      
      try:
        validate_password(value)
      except ValidationError as exc:
        raise serializers.ValidationError(str(exc))
      return value

    def create(self, validated_data):
      user = super(UserSerializer, self).create(validated_data)
      if 'password' in validated_data:
        user.set_password(validated_data['password'])
        user.save()
      return user


class AccountSerializer(ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'logo', 'company', 'enabled', 'plan_expires', "profile_set")


class ProfileSerializer(ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Profile
        fields = ('url', 'id', 'user', 'account', 'phone_number', 'notes')

class UserProfileSerializer(ModelSerializer):
    # user = UserSerializer(many=False, read_only=True)
    user = UserSerializer()
    account = AccountSerializer()
    class Meta:
        model = Profile
        fields = ('url', 'id', 'user', 'account', 'phone_number', 'notes', 'email_enabled', 'text_enabled')
        

    def update(self, instance, validated_data):
        if 'user' in validated_data:
            user_data = validated_data.pop('user')
            # Unless the application properly enforces that this field is
            # always set, the follow could raise a `DoesNotExist`, which
            # would need to be handled.
            user = instance.user
            for key, value in user_data.items():
              if key == 'password':
                setattr(user, key, make_password(value))
              if value != "" and key != 'password':
                setattr(user, key, value)
            user.save()

        for key, value in validated_data.items():
            if value != "":
              setattr(instance, key, value)
            
        instance.save()

        return instance

class RequestedTimeOffSerializer(ModelSerializer):
    # status = serializers.ChoiceField(choices=STATUS_CHOICES, default='Pending')

    class Meta:
        model = RequestedTimeOff
        # model.STATUS_CHOICES
        fields = ('id', 'profile', 'start_datetime', 'end_datetime', 'reason', 'status')


    def create(self, validated_data):
      # TODO: check valid profile wuth user
      roo = super(RequestedTimeOffSerializer, self).create(validated_data)
      roo.save()
      return roo



class ShiftSerializer(ModelSerializer):
    class Meta:
        model = Shift
        fields = ('id', 'account', 'profile', 'start_datetime', 'end_datetime', 'notes', 'is_open')


class HourOfOperationSerializer(ModelSerializer):
    class Meta:
        model = HourOfOperation
        fields = ('id', 'account', 'day', 'open_time', 'close_time')


class AvailabilitySerializer(ModelSerializer):
    class Meta:
        model = Availability
        fields = ('id', 'profile', 'day', 'start_time', 'end_time')

