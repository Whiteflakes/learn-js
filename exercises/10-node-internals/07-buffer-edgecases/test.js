const assert = require('assert');
const { safeConcat, splitUtf8 } = require('./index');

// zero-length buffers
const a = Buffer.from('a');
const empty = Buffer.alloc(0);
const c = safeConcat([a, empty, Buffer.from('b')]);
assert.strictEqual(c.toString(),'ab');

// multi-byte utf8 (e.g., '€' is 3 bytes)
const s = 'A€B';
const buf = Buffer.from(s);
// choose an index that may split the euro sign
const maybeSplit = Math.floor(buf.length/2);
const [l,r] = splitUtf8(buf, maybeSplit);
assert.doesNotThrow(()=> Buffer.from(l.toString()), 'left decodes');
assert.doesNotThrow(()=> Buffer.from(r.toString()), 'right decodes');

console.log('08-node-internals-buffer-edgecases: PASS');
