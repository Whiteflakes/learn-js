const assert = require('assert');
const { customBind } = require('./index');

const obj = { x: 5 };
function add(a, b) { return this.x + a + b; }
const bound = customBind(add, obj, 1);
assert.strictEqual(bound(2), 8);

console.log('03-custom-bind: PASS');
