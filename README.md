# next-pick-pairs
> Pick key/value pairs from object.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-pick-pairs
```

## usage
```js
import '@jswork/next-pick-pairs';

const obj = {
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

const res = nx.pickPairs(obj,['nickname','is_staff','email']);

//result:
[ { key: 'nickname', value: null },
  { key: 'is_staff', value: false },
  { key: 'email', value: 'test@email.com' } ]
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-pick-pairs/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-pick-pairs
[version-url]: https://npmjs.org/package/@jswork/next-pick-pairs

[license-image]: https://img.shields.io/npm/l/@jswork/next-pick-pairs
[license-url]: https://github.com/afeiship/next-pick-pairs/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-pick-pairs
[size-url]: https://github.com/afeiship/next-pick-pairs/blob/master/dist/next-pick-pairs.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-pick-pairs
[download-url]: https://www.npmjs.com/package/@jswork/next-pick-pairs
