const assert = require('assert');
const { runBench } = require('./index');
const r = runBench(100000, 1000);
assert(typeof r.naive === 'number');
assert(typeof r.chunked === 'number');
console.log('PASS');
