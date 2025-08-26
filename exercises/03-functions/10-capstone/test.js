const assert = require('assert');
const { createPerson } = require('./index');

const { obj, bound } = createPerson('Alice');
assert.strictEqual(obj.getName(), 'Alice');
// detached method loses `this`
const detachedGreet = obj.greet;
// calling detachedGreet would fail to access publicName; use bound version
assert.strictEqual(bound.greet(), "Hi, I'm Alice");
// update name and ensure closure and bound method reflect change
obj.setName('Bob');
assert.strictEqual(obj.getName(), 'Bob');
assert.strictEqual(bound.greet(), "Hi, I'm Bob");

console.log('03-capstone: PASS');
