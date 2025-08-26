const assert = require('assert');
const { createTracer } = require('./index');

const tracer = createTracer();
const id = tracer.start('job');
// do some work
for (let i = 0; i < 100000; i++); // noop loop
tracer.end(id);
const recs = tracer.getRecords();
assert.strictEqual(recs[0].label, 'job');
assert(recs[0].duration >= 0);
console.log('PASS');
