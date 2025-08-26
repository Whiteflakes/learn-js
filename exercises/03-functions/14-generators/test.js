const assert = require('assert');
const { range } = require('./index');

const arr = Array.from(range(3));
assert.deepStrictEqual(arr, [0,1,2]);
console.log('03-generators: PASS');
