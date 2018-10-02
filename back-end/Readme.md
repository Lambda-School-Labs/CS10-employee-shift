## End Points

* rest-auth/login/
takes a post with username and password, returns auth token.


## API Endpoints
o/
o/ ^authorize/$ [name='authorize']
o/ ^token/$ [name='token']
o/ ^revoke_token/$ [name='revoke-token']
o/ ^introspect/$ [name='introspect']
o/ ^applications/$ [name='list']
o/ ^applications/register/$ [name='register']
o/ ^applications/(?P<pk>[\w-]+)/$ [name='detail']
o/ ^applications/(?P<pk>[\w-]+)/delete/$ [name='delete']
o/ ^applications/(?P<pk>[\w-]+)/update/$ [name='update']
o/ ^authorized_tokens/$ [name='authorized-token-list']
o/ ^authorized_tokens/(?P<pk>[\w-]+)/delete/$ [name='authorized-token-delete']
api/ ^users/$ [name='user-list']
api/ ^users\.(?P<format>[a-z0-9]+)/?$ [name='user-list']
api/ ^users/(?P<pk>[^/.]+)/$ [name='user-detail']
api/ ^users/(?P<pk>[^/.]+)\.(?P<format>[a-z0-9]+)/?$ [name='user-detail']
api/ ^profiles/$ [name='profile-list']
api/ ^profiles\.(?P<format>[a-z0-9]+)/?$ [name='profile-list']
api/ ^profiles/(?P<pk>[^/.]+)/$ [name='profile-detail']
api/ ^profiles/(?P<pk>[^/.]+)\.(?P<format>[a-z0-9]+)/?$ [name='profile-detail']
api/ ^userprofile/$ [name='profile-list']
api/ ^userprofile\.(?P<format>[a-z0-9]+)/?$ [name='profile-list']
api/ ^userprofile/(?P<pk>[^/.]+)/$ [name='profile-detail']
api/ ^userprofile/(?P<pk>[^/.]+)\.(?P<format>[a-z0-9]+)/?$ [name='profile-detail']
api/ ^accounts/$ [name='account-list']
api/ ^accounts\.(?P<format>[a-z0-9]+)/?$ [name='account-list']
api/ ^accounts/(?P<pk>[^/.]+)/$ [name='account-detail']
api/ ^accounts/(?P<pk>[^/.]+)\.(?P<format>[a-z0-9]+)/?$ [name='account-detail']
api/ ^requestoff/$ [name='requestedtimeoff-list']
api/ ^requestoff\.(?P<format>[a-z0-9]+)/?$ [name='requestedtimeoff-list']
api/ ^requestoff/(?P<pk>[^/.]+)/$ [name='requestedtimeoff-detail']
api/ ^requestoff/(?P<pk>[^/.]+)\.(?P<format>[a-z0-9]+)/?$ [name='requestedtimeoff-detail']
api/ ^shifts/$ [name='shift-list']
api/ ^shifts\.(?P<format>[a-z0-9]+)/?$ [name='shift-list']
api/ ^shifts/(?P<pk>[^/.]+)/$ [name='shift-detail']
api/ ^shifts/(?P<pk>[^/.]+)\.(?P<format>[a-z0-9]+)/?$ [name='shift-detail']
api/ ^availabilities/$ [name='availability-list']
api/ ^availabilities\.(?P<format>[a-z0-9]+)/?$ [name='availability-list']
api/ ^availabilities/(?P<pk>[^/.]+)/$ [name='availability-detail']
api/ ^availabilities/(?P<pk>[^/.]+)\.(?P<format>[a-z0-9]+)/?$ [name='availability-detail']
api/ ^hoo/$ [name='hourofoperation-list']
api/ ^hoo\.(?P<format>[a-z0-9]+)/?$ [name='hourofoperation-list']
api/ ^hoo/(?P<pk>[^/.]+)/$ [name='hourofoperation-detail']
api/ ^hoo/(?P<pk>[^/.]+)\.(?P<format>[a-z0-9]+)/?$ [name='hourofoperation-detail']
api/ ^$ [name='api-root']
api/ ^\.(?P<format>[a-z0-9]+)/?$ [name='api-root']
api/sign_up/
create-charge/ [name='cout']
payments/ [name='pay']


* The following is a list of all of the endpoints that are available for use with our API.

### `api/users`

| TYPE   | DATA                       | DESCRIPTION                              |
| ----   | -------------------------- | ---------------------------------------- |
| GET    |                            | View a list of all metas in the database |
| POST   | name, location, password\* | Create a new meta [password optional]    |
| PUT    | name, location, password\* | Create a new meta [password optional]    |
| DELETE | name, location, password\* | Create a new meta [password optional]    |


### `api/users`

| TYPE   | DATA                       | DESCRIPTION                              |
| ----   | -------------------------- | ---------------------------------------- |
| GET    |                            | View a list of all metas in the database |
| POST   | name, location, password\* | Create a new meta [password optional]    |
| PUT    | name, location, password\* | Create a new meta [password optional]    |
| DELETE | name, location, password\* | Create a new meta [password optional]    |


### `api/profiles/`

| TYPE   | DATA                       | DESCRIPTION                              |
| ----   | -------------------------- | ---------------------------------------- |
| GET    |                            | View a list of all metas in the database |
| POST   | name, location, password\* | Create a new meta [password optional]    |
| PUT    | name, location, password\* | Create a new meta [password optional]    |
| DELETE | name, location, password\* | Create a new meta [password optional]    |

### `api/accounts/`

| TYPE   | DATA                       | DESCRIPTION                              |
| ----   | -------------------------- | ---------------------------------------- |
| GET    |                            | View a list of all metas in the database |
| POST   | name, location, password\* | Create a new meta [password optional]    |
| PUT    | name, location, password\* | Create a new meta [password optional]    |
| DELETE | name, location, password\* | Create a new meta [password optional]    |


### `api/requestoff/`

| TYPE   | DATA                       | DESCRIPTION                              |
| ----   | -------------------------- | ---------------------------------------- |
| GET    |                            | View a list of all metas in the database |
| POST   | name, location, password\* | Create a new meta [password optional]    |
| PUT    | name, location, password\* | Create a new meta [password optional]    |
| DELETE | name, location, password\* | Create a new meta [password optional]    |


### `api/shifts/`

| TYPE   | DATA                       | DESCRIPTION                              |
| ----   | -------------------------- | ---------------------------------------- |
| GET    |                            | View a list of all metas in the database |
| POST   | name, location, password\* | Create a new meta [password optional]    |
| PUT    | name, location, password\* | Create a new meta [password optional]    |
| DELETE | name, location, password\* | Create a new meta [password optional]    |


### `api/availabilities/`

| TYPE   | DATA                       | DESCRIPTION                              |
| ----   | -------------------------- | ---------------------------------------- |
| GET    |                            | View a list of all metas in the database |
| POST   | name, location, password\* | Create a new meta [password optional]    |
| PUT    | name, location, password\* | Create a new meta [password optional]    |
| DELETE | name, location, password\* | Create a new meta [password optional]    |



### `api/^hoos/`

| TYPE   | DATA                       | DESCRIPTION                              |
| ----   | -------------------------- | ---------------------------------------- |
| GET    |                            | View a list of all metas in the database |
| POST   | name, location, password\* | Create a new meta [password optional]    |
| PUT    | name, location, password\* | Create a new meta [password optional]    |
| DELETE | name, location, password\* | Create a new meta [password optional]    |


### `api/`

| TYPE   | DATA                       | DESCRIPTION                              |
| ----   | -------------------------- | ---------------------------------------- |
| GET    |                            | View a list of all metas in the database |
| POST   | name, location, password\* | Create a new meta [password optional]    |
| PUT    | name, location, password\* | Create a new meta [password optional]    |
| DELETE | name, location, password\* | Create a new meta [password optional]    |


### `api/sign_up/`

| TYPE   | DATA                       | DESCRIPTION                              |
| ----   | -------------------------- | ---------------------------------------- |
| GET    |                            | View a list of all metas in the database |
| POST   | name, location, password\* | Create a new meta [password optional]    |
| PUT    | name, location, password\* | Create a new meta [password optional]    |
| DELETE | name, location, password\* | Create a new meta [password optional]    |



* passwords are an optional parameter provided by the meta creator to require verification when performing any non-GET operations on their meta