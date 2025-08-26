const assert = require('assert');
const { reverseString } = require('./index');

assert.strictEqual(reverseString('abc'), 'cba');
assert.strictEqual(reverseString(''), '');

console.log('02-strings: PASS');
