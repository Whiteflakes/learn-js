const sinon = require('sinon');
const { getUserName } = require('./index');

test('getUserName calls api.fetch and uppercases name', async () => {
  const api = { fetch: async (id) => ({ id, name: 'bob' }) };
  const stub = sinon.stub(api, 'fetch').resolves({ id: '1', name: 'Charlie' });

  const name = await getUserName(api, '1');
  expect(name).toBe('CHARLIE');
  expect(stub.calledOnceWith('1')).toBe(true);
  stub.restore();
});
