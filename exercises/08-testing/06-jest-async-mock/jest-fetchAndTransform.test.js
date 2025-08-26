const sinon = require('sinon');
const { fetchAndTransform } = require('./index');

test('fetchAndTransform handles async client.get', async () => {
  const client = { get: async (id) => ({ id, data: 'hello' }) };
  const stub = sinon.stub(client, 'get').resolves({ id: 'x', data: 'payload' });

  const out = await fetchAndTransform(client, 'x');
  expect(out).toEqual({ id: 'x', length: 7 });
  expect(stub.calledOnceWith('x')).toBe(true);
  stub.restore();
});
