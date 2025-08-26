const assert = require('assert');
const { reflectAll } = require('./index');

(async () => {
  const arr = [Promise.resolve(1), Promise.reject('err')];
  const res = await reflectAll(arr);
  assert.strictEqual(res[0].status, 'fulfilled');
  assert.strictEqual(res[0].value, 1);
  assert.strictEqual(res[1].status, 'rejected');
  assert.strictEqual(res[1].reason, 'err');
  console.log('04-promise-all-race: PASS');
})();
