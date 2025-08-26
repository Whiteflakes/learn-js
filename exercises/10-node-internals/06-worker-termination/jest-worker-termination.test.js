const { runTask } = require('./index');

test('runTask resolves and termination path rejects', async () => {
  const v = await runTask(2, { timeout: 200 });
  expect(v).toBe(4);
  let err;
  try { await runTask(20000, { timeout: 20 }); } catch (e) { err = e; }
  expect(err).toBeDefined();
});
