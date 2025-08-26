const assert = require('assert');
const { fetchAndDouble } = require('./index');

(async () => {
  const res = await fetchAndDouble(async () => 5);
  assert.strictEqual(res, 10);
  console.log('04-async-await: PASS');
})();
