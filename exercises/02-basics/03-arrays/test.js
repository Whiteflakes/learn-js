const assert = require('assert');
const { unique } = require('./index');

assert.deepStrictEqual(unique([1,2,1,3,2]), [1,2,3]);
assert.deepStrictEqual(unique([]), []);
assert.deepStrictEqual(unique(['a','a','b']), ['a','b']);

console.log('02-arrays: PASS');
