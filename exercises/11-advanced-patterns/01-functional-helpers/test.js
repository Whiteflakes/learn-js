const assert = require('assert');
const { curry, compose } = require('./index');

// curry
function add(a,b,c){ return a+b+c; }
const cadd = curry(add);
assert.strictEqual(cadd(1)(2)(3), 6);
assert.strictEqual(cadd(1,2)(3), 6);

// compose
const double = x => x*2;
const inc = x => x+1;
const f = compose(double, inc);
assert.strictEqual(f(2), 6); // double(inc(2)) => double(3) => 6

console.log('09-advanced-patterns-functional-helpers: PASS');
