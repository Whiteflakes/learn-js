const assert = require('assert');
const { addOuter } = require('./index');

const fn = addOuter(1);
assert.strictEqual(fn(3), 6);
console.log('03-execution-context: PASS');
