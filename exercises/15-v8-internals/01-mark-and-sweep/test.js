const assert = require('assert');
const { markAndSweep } = require('./index');

// simple heap
const heap = {
  a: { refs: ['b'] },
  b: { refs: ['c'] },
  c: { refs: [] },
  d: { refs: ['e'] },
  e: { refs: [] }
};

const remaining = markAndSweep(heap, ['a']);
assert(remaining.includes('a'));
assert(remaining.includes('b'));
assert(remaining.includes('c'));
assert(!remaining.includes('d'));
assert(!remaining.includes('e'));

console.log('PASS');
