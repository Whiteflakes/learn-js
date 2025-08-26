const assert = require('assert');
const { manualNew } = require('./index');

function Person(name) { this.name = name; }
Person.prototype.greet = function() { return `hi ${this.name}`; };

const p = manualNew(Person, 'Sam');
assert.strictEqual(p.name, 'Sam');
assert.strictEqual(p.greet(), 'hi Sam');
console.log('03-manual-new: PASS');
