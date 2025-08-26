const assert = require('assert');
const { getRefactors } = require('./index');

const code = 'function run() {\n  doWork();\n}\n';
const start = code.indexOf('doWork');
const end = start + 'doWork();'.length;
const refactors = getRefactors(code, start, end);
assert(refactors.length === 1);
const transformed = refactors[0].apply();
assert(transformed.includes('try {'));
assert(transformed.includes('catch (e)'));
console.log('PASS');
