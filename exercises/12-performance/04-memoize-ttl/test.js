const assert = require('assert');
const { memoizeTtl } = require('./index');

module.exports = async function() {
  let calls = 0;
  const fn = (x) => { calls++; return x*2 };
  const m = memoizeTtl(fn, 50);
  const a = m(2); const b = m(2);
  assert.strictEqual(a, 4);
  assert.strictEqual(b, 4);
  assert.strictEqual(calls, 1);
  await new Promise((r)=>setTimeout(r, 60));
  const c = m(2);
  assert.strictEqual(calls, 2);
};
