const assert = require('assert');
const { curry } = require('./index');

function add(a,b,c){ return a+b+c; }
const cur = curry(add);

assert.strictEqual(cur(1)(2)(3), 6);
assert.strictEqual(cur(1,2)(3), 6);
assert.strictEqual(cur(1,2,3), 6);

console.log('02-functions: PASS');
