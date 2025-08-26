const assert = require('assert');
const { arrowThisDemo } = require('./index');

const [n, a] = arrowThisDemo();
assert.strictEqual(n, 1);
// arrow function shouldn't read the object's this.x
assert.notStrictEqual(a, 1);
console.log('03-arrow-this: PASS');
