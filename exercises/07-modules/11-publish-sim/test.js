const assert = require('assert');
const { simulatePublish } = require('./index');

const res = simulatePublish({ name: 'pkg', version: '1.0.0' });
assert.strictEqual(res.ok, true);
console.log('05-modules-publish-sim: PASS');
