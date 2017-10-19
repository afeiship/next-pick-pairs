# next-pick-pairs
> Pick key/value pairs from object.


## usage:
```js
var obj = {
  "nickname": null,
  "uid": "UR1785049326",
  "job": null,
  "last_name": null,
  "username": "15502115100",
  "last_active": "2017-09-22T13:08:04.753046Z",
  "is_staff": false,
  "login_count": 5,
  "gender": null,
  "is_active": true,
  "groups": [],
  "company": null,
  "is_superuser": false,
  "first_name": null,
  "last_login": "2017-09-22T13:08:04.753038Z",
  "permissions": [],
  "date_joined": "2017-09-19T14:13:10.129030Z",
  "email": 'test@email.com',
  "phone": "15502115100"
};
var res = nx.pickPairs(obj,['nickname','is_staff','email']);

//result:
[ { key: 'nickname', value: null },
  { key: 'is_staff', value: false },
  { key: 'email', value: 'test@email.com' } ]
```
