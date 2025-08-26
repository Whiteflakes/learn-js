const sinon = require('sinon');
const { fetchAndDouble } = require('./index');

test('fetchAndDouble uses provided fetcher and doubles value', async () => {
  const fetcher = { fetch: async (id) => ({ id, value: 3 }) };
  const stub = sinon.stub(fetcher, 'fetch').resolves({ id: 'a', value: 5 });
  const out = await fetchAndDouble(fetcher.fetch, 'a');
  expect(out).toBe(10);
  expect(stub.calledOnceWith('a')).toBe(true);
  stub.restore();
});
