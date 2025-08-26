const assert = require('assert');
const { hoistExample } = require('./index');

assert.strictEqual(hoistExample(), 'number');
console.log('03-hoisting: PASS');
