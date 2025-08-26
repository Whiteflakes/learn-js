const assert = require('assert');
const { makeDispatcher } = require('./index');
const d = makeDispatcher();
d.register('svc', p => p.x + 1);
assert.strictEqual(d.dispatch('svc', { x: 1 }), 2);
console.log('11-systems-microservices-intro: PASS');
