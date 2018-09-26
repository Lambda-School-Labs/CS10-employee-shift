from django.contrib.auth.models import User, Group, Permission
from rest_framework.serializers import ModelSerializer, ChoiceField
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password, get_password_validators

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


class AccountSerializer(ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'logo', 'company', 'enabled', 'plan_expires', "profile_set")


class ProfileSerializer(ModelSerializer):
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
            print(user_data)
            # Unless the application properly enforces that this field is
            # always set, the follow could raise a `DoesNotExist`, which
            # would need to be handled.
            user = instance.user
            for key, value in user_data.items():
              if value != "":
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

