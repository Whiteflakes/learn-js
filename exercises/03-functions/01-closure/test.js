const assert = require('assert');
const { makeCounter } = require('./index');

const c1 = makeCounter(0);
const c2 = makeCounter(10);

assert.strictEqual(c1(), 1);
assert.strictEqual(c1(), 2);
assert.strictEqual(c2(), 11);
assert.strictEqual(c2(5), 16);

console.log('03-closure: PASS');
