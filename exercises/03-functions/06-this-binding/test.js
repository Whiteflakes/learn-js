const assert = require('assert');
const { showThis } = require('./index');

const obj = { value: 99, get() { return this.value; } };
// calling directly
assert.strictEqual(obj.get(), 99);
// calling detached normally loses `this` (would be undefined in strict mode), so we use showThis
assert.strictEqual(showThis(obj.get, obj), 99);

console.log('03-this-binding: PASS');
