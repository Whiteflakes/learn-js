const assert = require('assert');
const { delayedValue } = require('./index');

(async () => {
  const v = await delayedValue(7, 10);
  assert.strictEqual(v, 7);
  console.log('04-promises-basics: PASS');
})();
