const assert = require('assert');
const { bundleWithPlugins } = require('./index');

const modules = {
  'entry.js': { code: "console.log(ENV);", deps: [] }
};

const plugins = [
  { transform(code) { return code.replace('ENV', `'production'`); } },
  { finalize(bundle) { return bundle + '\n// END'; } }
];

const out = bundleWithPlugins(modules, 'entry.js', plugins);
assert(out.includes('production'));
assert(out.includes('// END'));
console.log('PASS');
