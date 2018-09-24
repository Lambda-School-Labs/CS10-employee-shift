"""employee_shift URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from shiftapp.api import UserList, UserDetails, GroupList, SignUp, AccountList, ProfileList, AvailabilityList, RequestedTimeOffList, ShiftList, HourOfOperationList
from django.contrib.auth.models import User, Group
admin.autodiscover()
from rest_framework import generics, permissions, serializers, routers
from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope, TokenHasScope 
from stripe_payment.api import checkout

router = routers.DefaultRouter()
router.register(r'accounts', AccountList)
router.register(r'profiles', ProfileList)
router.register(r'requestoff', RequestedTimeOffList)
router.register(r'shifts', ShiftList)
router.register(r'availabilities', AvailabilityList)
router.register(r'hoo', HourOfOperationList)
router.register(r'users', UserList),



urlpatterns = [
   path('admin/', admin.site.urls),
   path('o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
   path('users/<pk>/', UserDetails.as_view()),
   path('groups/', GroupList.as_view()),
   path('api/', include(router.urls)),
   path('api/sign_up/', SignUp.as_view()),
   path(r'payments/', include('djstripe.urls', namespace="djstripe")),
   path(r'create-charge/', checkout, name="cout"),
]