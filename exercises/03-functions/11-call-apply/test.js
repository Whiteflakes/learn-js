const assert = require('assert');
const { call2, apply2 } = require('./index');

function sum(a,b){ return this.base + a + b; }
const ctx = { base: 10 };
assert.strictEqual(call2(sum, ctx, 1, 2), 13);
assert.strictEqual(apply2(sum, ctx, [3,4]), 17);

console.log('03-call-apply: PASS');
