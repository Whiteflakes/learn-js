const assert = require('assert');
const { runTask } = require('./index');

module.exports = async function() {
  const v = await runTask(2, { timeout: 200 });
  assert.strictEqual(v, 4);
  let err;
  try { await runTask(20000, { timeout: 50 }); } catch (e) { err = e; }
  assert.ok(err, 'should have terminated');
  console.log('08-node-internals-worker-termination: PASS');
};
