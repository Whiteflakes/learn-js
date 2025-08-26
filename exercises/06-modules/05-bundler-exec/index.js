// Minimal in-memory bundler executor used for tests and CLI integration.
// modules: { name: codeString }
function buildAndRequire(modules, entry) {
  const cache = new Map();

  function localRequire(name) {
    if (cache.has(name)) return cache.get(name).exports;
    const code = modules[name];
    if (code === undefined) throw new Error('Module not found: ' + name);
    const module = { exports: {} };
    cache.set(name, module);
    // Execute module code in a function scope with require/module/exports
    const fn = new Function('require', 'module', 'exports', '__filename', '__dirname', code);
    fn(localRequire, module, module.exports, name, '/');
    return module.exports;
  }

  return localRequire(entry);
}

module.exports = { buildAndRequire };
