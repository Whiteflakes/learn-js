const vm = require('vm');

function runBundle(bundleCode) {
  // bundleCode is expected to expose __modules and an entry 'main'
  const sandbox = { console, result: null };
  vm.createContext(sandbox);
  // the bundle returns the modules map; execute and then require 'main'
  // Evaluate the bundle IIFE and capture the returned modules object into __bundle
  const wrapper = 'const __bundle = ' + bundleCode + '\nresult = (function(mods){\n  const cache = {};\n  function req(id){ if(cache[id]) return cache[id].exports; const m = {exports:{}}; cache[id]=m; mods[id](m.exports, req, m); return m.exports;}\n  return req(\'main\');\n})(__bundle);';
  vm.runInContext(wrapper, sandbox);
  return sandbox.result;
}

module.exports = { runBundle };
