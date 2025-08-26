const assert = require('assert');
const { createMetrics } = require('./index');
const mm = createMetrics();
mm.inc('hits'); mm.inc('hits',2);
assert.strictEqual(mm.get('hits'), 3);
console.log('12-scaling-observability: PASS');
