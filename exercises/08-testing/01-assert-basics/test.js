const assert = require('assert');
const { sum } = require('./index');

assert.strictEqual(sum(2,3), 5);
console.log('08-testing-assert-basics: PASS');
