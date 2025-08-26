const assert = require('assert');
const { deepClone } = require('./index');

const a = { x: 1, nested: { y: 2 } };
const b = deepClone(a);
assert.deepStrictEqual(b, a);
assert.notStrictEqual(b, a);
assert.notStrictEqual(b.nested, a.nested);

console.log('02-objects: PASS');
