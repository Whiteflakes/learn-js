const assert = require('assert');
const { debounce } = require('./index');

module.exports = async function() {
  let calls = 0;
  const fn = () => { calls++; };
  const d = debounce(fn, 30);
  d(); d(); d();
  await new Promise((r)=>setTimeout(r, 50));
  assert.strictEqual(calls, 1, 'debounced should have been called once');
};
