const assert = require('assert');
const { shallowClone, setIn } = require('./index');

const obj = { a: { b: 1 }, arr: [1,2] };
const obj2 = setIn(obj, 'a.b', 2);
assert.strictEqual(obj.a.b, 1, 'original unchanged');
assert.strictEqual(obj2.a.b, 2, 'updated copy');

const arrClone = shallowClone([1,2,3]);
arrClone.push(4);
assert.strictEqual(arrClone.length, 4);
assert.strictEqual([1,2,3].length, 3);

console.log('09-advanced-patterns-immutability: PASS');
