const assert = require('assert');
const { babelExplain } = require('./index');

assert.ok(babelExplain().toLowerCase().includes('transpil') || babelExplain().toLowerCase().includes('transfor'));
console.log('05-modules-babel: PASS');
