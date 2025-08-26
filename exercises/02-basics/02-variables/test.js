const assert = require('assert');
const { describeType } = require('./index');

assert.strictEqual(describeType(null), 'null');
assert.strictEqual(describeType([1,2]), 'array');
assert.strictEqual(describeType(42), 'number');
assert.strictEqual(describeType('x'), 'string');
assert.strictEqual(describeType({}), 'object');

console.log('02-variables: PASS');
