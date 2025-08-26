const assert = require('assert');
const { resolveImport } = require('./index');

const config = {
  baseUrl: 'src',
  paths: {
    '@app/*': ['app/*'],
    '@lib/*': ['lib/*']
  }
};

assert.strictEqual(resolveImport('@app/utils', config), 'src/app/utils');
assert.strictEqual(resolveImport('@lib/math', config), 'src/lib/math');
assert.strictEqual(resolveImport('./local', config), './local');

console.log('PASS');
