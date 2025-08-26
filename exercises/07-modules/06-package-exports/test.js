const assert = require('assert');
const { packageExportsNote } = require('./index');

assert.ok(packageExportsNote().toLowerCase().includes('exports'));
console.log('05-modules-package-exports: PASS');
