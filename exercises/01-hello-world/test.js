const assert = require('assert');
const { greet } = require('./index');

assert.strictEqual(greet('World'), 'Hello, World!');
console.log('01-hello-world: PASS');
