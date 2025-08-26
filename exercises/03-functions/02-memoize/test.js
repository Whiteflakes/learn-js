const assert = require('assert');
const { memoize } = require('./index');

let calls = 0;
function sum(a,b){ calls++; return a+b; }
const m = memoize(sum);

assert.strictEqual(m(1,2), 3);
assert.strictEqual(m(1,2), 3);
assert.strictEqual(calls, 1);
assert.strictEqual(m(2,3), 5);
assert.strictEqual(calls, 2);

console.log('03-memoize: PASS');
