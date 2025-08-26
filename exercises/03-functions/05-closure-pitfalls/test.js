const assert = require('assert');
const { createCounters } = require('./index');

const counters = createCounters(3);
assert.strictEqual(counters.length, 3);
assert.strictEqual(counters[0](), 0);
assert.strictEqual(counters[1](), 1);
assert.strictEqual(counters[2](), 2);

console.log('03-closure-pitfalls: PASS');
