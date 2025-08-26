const assert = require('assert');
const { concatBuffers } = require('./index');

module.exports = function() {
  const a = Buffer.from('a');
  const b = Buffer.from('b');
  const c = concatBuffers([a,b]);
  assert.strictEqual(c.toString(),'ab');
  console.log('08-node-internals-buffers: PASS');
};
