const assert = require('assert');
const { buildAndRequire } = require('../05-bundler-exec');

// build simple modules where main requires a
const modules = {
  a: 'exports.x = 2;',
  main: 'const a = require(\'a\'); exports.value = a.x * 3;'
};
const res = buildAndRequire(modules, 'main');
assert.strictEqual(res.value, 6);
console.log('05-modules-bundler-run: PASS');
