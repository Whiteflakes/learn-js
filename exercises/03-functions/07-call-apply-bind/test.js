const assert = require('assert');
const { bindAll } = require('./index');

const obj = { x: 7, get() { return this.x; }, inc(v) { this.x += v; return this.x; } };
const bound = bindAll(obj, ['get', 'inc']);
const detachedGet = bound.get;
assert.strictEqual(detachedGet(), 7);
assert.strictEqual(bound.inc(3), 10);

console.log('03-call-apply-bind: PASS');
