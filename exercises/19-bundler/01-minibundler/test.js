const assert = require('assert');
const { bundle } = require('./index');

const modules = {
  'a.js': { code: "console.log('a');", deps: ['b.js'] },
  'b.js': { code: "console.log('b');", deps: [] }
};

const out = bundle(modules, 'a.js');
assert(out.includes("MODULE: b.js"));
assert(out.includes("MODULE: a.js"));

console.log('PASS');
