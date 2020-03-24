const nx = require('@feizheng/next-js-core2');
require('../src/next-pick-pairs');

var obj = {
  nickname: 'afei',
  uid: 'UR1785049326',
  job: null,
  last_name: null,
  username: '15502115100',
  last_active: '2017-09-22T13:08:04.753046Z',
  is_staff: false,
  login_count: 5,
  gender: null,
  is_active: true,
  groups: [],
  company: null,
  meta: {
    is_superuser: false,
    first_name: null,
    last_login: '2017-09-22T13:08:04.753038Z',
    permissions: [],
    date_joined: '2017-09-19T14:13:10.129030Z',
    email: 'test@email.com',
    phone: '15502115100'
  }
};

describe('api.basic test', () => {
  test('nx.pairs without paths', () => {
    expect(nx.pickPairs(obj)).toEqual([
      { key: 'nickname', value: 'afei' },
      { key: 'uid', value: 'UR1785049326' },
      { key: 'job', value: null },
      { key: 'last_name', value: null },
      { key: 'username', value: '15502115100' },
      { key: 'last_active', value: '2017-09-22T13:08:04.753046Z' },
      { key: 'is_staff', value: false },
      { key: 'login_count', value: 5 },
      { key: 'gender', value: null },
      { key: 'is_active', value: true },
      { key: 'groups', value: [] },
      { key: 'company', value: null },
      {
        key: 'meta',
        value: {
          is_superuser: false,
          first_name: null,
          last_login: '2017-09-22T13:08:04.753038Z',
          permissions: [],
          date_joined: '2017-09-19T14:13:10.129030Z',
          email: 'test@email.com',
          phone: '15502115100'
        }
      }
    ]);
  });

  test('nx.pickPairs without default', function() {
    var res = nx.pickPairs(obj, [
      'nickname',
      'last_name',
      'is_staff',
      'meta.email'
    ]);
    expect(res).toEqual([
      { key: 'nickname', value: 'afei' },
      { key: 'last_name', value: null },
      { key: 'is_staff', value: false },
      { key: 'meta.email', value: 'test@email.com' }
    ]);
  });

  test('nx.pairs with null value, use defaults', () => {
    var res = nx.pickPairs(
      obj,
      ['company', 'gender', 'is_staff', 'meta.email'],
      {
        company: 'Cisco',
        gender: 'male'
      }
    );
    expect(res).toEqual([
      { key: 'company', value: 'Cisco' },
      { key: 'gender', value: 'male' },
      { key: 'is_staff', value: false },
      { key: 'meta.email', value: 'test@email.com' }
    ]);
  });
});
