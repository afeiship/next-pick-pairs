var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-pick-pairs');

describe('next/pickPairs', function () {

  it('nx.pickPairs', function () {
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

    assert.equal(res[0].key, 'nickname');
    assert.equal(res[2].key, 'email');
    assert.equal(res[2].value, 'test@email.com');
  });

});
