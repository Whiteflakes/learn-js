const assert = require('assert');
const { simpleBundle } = require('./index');

const code = { a: 'exports.x = 1;', b: 'exports.y = 2;' };
const b = simpleBundle(code);
assert.ok(b.includes("// module a"));
assert.ok(b.includes("exports.x = 1;"));
console.log('05-modules-bundler: PASS');
