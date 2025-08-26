const assert = require('assert');
const { sourceMapsNote } = require('./index');

assert.ok(sourceMapsNote().toLowerCase().includes('source'));
console.log('05-modules-source-maps: PASS');
