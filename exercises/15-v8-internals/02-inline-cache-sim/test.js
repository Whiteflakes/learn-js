const assert = require('assert');
const { createICTracker } = require('./index');

const ic = createICTracker();
for (let i = 0; i < 5; i++) {
  ic.access('site1', { a: 1, b: 2 }, 'a');
}
ic.access('site2', { x: 1 }, 'x');
ic.access('site2', { x: 1, y: 2 }, 'x');
const rep = ic.report();
assert.strictEqual(rep.site1.kind, 'monomorphic');
assert(rep.site2.kind === 'polymorphic');
console.log('PASS');
