const assert = require('assert');
const { simpleTransform } = require('./index');

const src = 'let x = 1; function f(){ let y=2; }';
const out = simpleTransform(src);
assert.ok(out.includes('var x'));
assert.ok(out.includes('var y'));
console.log('05-modules-tiny-babel: PASS');
