const assert = require('assert');
const { Maybe } = require('./index');

const m = Maybe.of(2).map(x => x * 3);
assert.strictEqual(m.getOrElse(0), 6);

const n = Maybe.of(null).map(x => x * 3);
assert.strictEqual(n.getOrElse(5), 5);

console.log('09-advanced-patterns-maybe: PASS');
