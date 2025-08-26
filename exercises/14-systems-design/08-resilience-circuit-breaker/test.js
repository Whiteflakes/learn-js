const assert = require('assert');
const { makeCircuitBreaker } = require('./index');
const cb = makeCircuitBreaker({threshold:2});
let threw=false; try{ cb.call(()=>{ throw new Error('e'); }); }catch(e){ threw=true; }
try{ cb.call(()=>{ throw new Error('e'); }); }catch(e){}
assert.strictEqual(cb.isOpen(), true);
console.log('11-systems-circuit-breaker: PASS');
