const assert = require('assert');
const { roundRobinSchedule } = require('./index');

const tasks = [ { id: 'A', work: 3 }, { id: 'B', work: 5 } ];
const out = roundRobinSchedule(tasks, 2);
// Expected sequence: A(2), B(2), A(1), B(2), B(1)
assert.strictEqual(out.length, 5);
assert.strictEqual(out[0].id, 'A');
assert.strictEqual(out[2].id, 'A');
assert.strictEqual(out[4].id, 'B');

console.log('PASS');
