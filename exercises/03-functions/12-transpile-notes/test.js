const assert = require('assert');
const { transpileNote } = require('./index');

assert.ok(transpileNote().toLowerCase().includes('transpil'));
console.log('03-transpile-notes: PASS');
