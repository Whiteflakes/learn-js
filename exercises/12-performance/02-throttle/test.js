const assert = require('assert');
const { throttle } = require('./index');

module.exports = async function() {
  let calls = 0;
  const fn = () => { calls++; };
  const t = throttle(fn, 30);
  t(); t(); t();
  await new Promise((r)=>setTimeout(r, 50));
  assert.strictEqual(calls, 1, 'throttle should have called fn once');
};
