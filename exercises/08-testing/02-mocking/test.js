const assert = require('assert');
const { getUser } = require('./index');

(async () => {
  const fakeApi = { fetch: async (id) => ({ id, name: 'Sam' }) };
  const name = await getUser(fakeApi, 1);
  assert.strictEqual(name, 'Sam');
  console.log('08-testing-mocking: PASS');
})();
