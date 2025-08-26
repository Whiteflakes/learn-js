const assert = require('assert');
const { buildAndRequire } = require('./index');

const mods = { a: 'exports.x = 5; exports.inc = function(v){ return v+1; };' };
const res = buildAndRequire(mods, 'a');
assert.strictEqual(res.x, 5);
assert.strictEqual(res.inc(2), 3);
console.log('05-modules-bundler-exec: PASS');
