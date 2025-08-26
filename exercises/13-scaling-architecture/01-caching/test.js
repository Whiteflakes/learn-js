const assert = require('assert');
const { createCache } = require('./index');
const c = createCache();
c.set('x',1,50);
assert.strictEqual(c.get('x'), 1);
setTimeout(()=>{ try{ assert.strictEqual(c.get('x'), undefined); console.log('12-scaling-caching: PASS'); }catch(e){ throw e; } }, 60);
