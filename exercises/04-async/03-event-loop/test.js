const assert = require('assert');
const { nextTickOrder } = require('./index');

(async () => {
  const out = await nextTickOrder();
  // microtask should run before macrotask
  assert.deepStrictEqual(out[0], 'sync');
  assert.deepStrictEqual(out[1], 'micro');
  assert.deepStrictEqual(out[2], 'macro');
  console.log('04-event-loop: PASS');
})();
