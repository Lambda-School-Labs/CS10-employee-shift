## End Points

* rest-auth/login/
takes a post with username and password, returns auth token.


## Routes
router = routers.DefaultRouter()
router.register(r'accounts', AccountList)
router.register(r'profiles', ProfileList)
router.register(r'requestoff', RequestedTimeOffList)
router.register(r'shifts', ShiftList)
router.register(r'availabilities', AvailabilityList)
router.register(r'hoo', HourOfOperationList)
router.register(r'users', UserList)