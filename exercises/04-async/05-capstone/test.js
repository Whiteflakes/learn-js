const assert = require('assert');
const { raceToSuccess } = require('./index');

(async () => {
  const p1 = new Promise((_,r) => setTimeout(() => r('no'), 20));
  const p2 = new Promise((res) => setTimeout(() => res('ok'), 10));
  const res = await raceToSuccess([p1,p2]);
  assert.strictEqual(res, 'ok');
  // if all reject
  try {
    await raceToSuccess([Promise.reject('a'), Promise.reject('b')]);
    throw new Error('should have rejected');
  } catch (e) {
    assert.deepStrictEqual(e, ['a','b']);
  }
  console.log('04-capstone: PASS');
})();
