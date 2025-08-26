const assert = require('assert');
const { runEcho } = require('./index');

const out = runEcho('hello');
assert.strictEqual(out.status, 0);
assert.ok(out.stdout.includes('hello'));
console.log('08-node-internals-child-process: PASS');
