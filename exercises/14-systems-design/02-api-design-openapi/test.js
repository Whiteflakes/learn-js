const assert = require('assert');
const { validate } = require('./index');
assert.strictEqual(validate({a:1,b:2},{required:['a']}), true);
let ok=false; try{ validate({a:1},{required:['a','b']}); }catch(e){ ok=true; }
assert.strictEqual(ok, true);
console.log('11-systems-api-openapi: PASS');
