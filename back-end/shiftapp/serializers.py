from django.contrib.auth.models import User, Group
from shiftapp.models import Profile, Account, Availability, RequestedTimeOff, Shift, HourOfOperation
from rest_framework import serializers, viewsets
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password, get_password_validators


from difflib import SequenceMatcher


class UserSerializer(serializers.HyperlinkedModelSerializer): 
    class Meta:
        model = User
        # fields = '__all__'
        fields = ('url', 'id', 'username','first_name', 'last_name', 'email', 'password', "is_staff", 'groups')
        extra_kwargs = {
            'password': {'write_only': True},
            'is_superuser': {'read_only': True},
        }


    def validate_password(self, value):
      data = self.get_initial()
      request = self.context.get("request")
      username = data.get("username")
      email = data.get("email")

      password = data.get("password")
      #retype password
      re_password = request.data["re_password"]

      first_name = data.get("first_name") 
      max_similarity = 0.5
      if re_password != password:
        raise serializers.ValidationError("The password doesn't match.")
      if SequenceMatcher(a=password.lower(), b=username.lower()).quick_ratio() > max_similarity:
        raise serializers.ValidationError("The password is too similar to the username.")
      if SequenceMatcher(a=password.lower(), b=email.lower()).quick_ratio() > max_similarity:
        raise serializers.ValidationError("The password is too similar to the email.")
      if SequenceMatcher(a=password.lower(), b=first_name.lower()).quick_ratio() > max_similarity:
        raise serializers.ValidationError("The password is too similar to the first name.")
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

    
class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'logo', 'company', 'enabled', 'plan_expires')


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'user', 'account', 'phone_number', 'notes')
  

class RequestedTimeOffSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestedTimeOff
        fields = ('id', 'profile', 'start_datetime', 'end_datetime', 'reason', 'status')


class ShiftSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shift
        fields = ('id', 'account', 'profile', 'start_datetime', 'end_datetime', 'notes', 'is_open')


class HourOfOperationSerializer(serializers.ModelSerializer):
    class Meta:
        model = HourOfOperation
        fields = ('id', 'account', 'day', 'open_time', 'close_time')


class AvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Availability
        fields = ('id', 'profile', 'day', 'start_time', 'end_time')

