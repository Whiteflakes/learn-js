const assert = require('assert');
const { createHiddenClassTracker } = require('./index');

const t = createHiddenClassTracker();
const o1 = {};
t.addProp(o1, 'a', 1);
t.addProp(o1, 'b', 2);
const o2 = {};
t.addProp(o2, 'a', 1);
t.addProp(o2, 'b', 2);
const rep = t.report();
assert(rep.transitionCount >= 2);
console.log('PASS');
