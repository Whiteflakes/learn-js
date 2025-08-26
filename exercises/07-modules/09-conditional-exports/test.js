const assert = require('assert');
const { resolveExport } = require('./index');

const pkg = { exports: { '.': './lib/index.js', './feature': './lib/feature.js' } };
assert.strictEqual(resolveExport(pkg, './feature'), './lib/feature.js');
assert.strictEqual(resolveExport(pkg, './unknown'), './lib/index.js');
console.log('05-modules-conditional-exports: PASS');
