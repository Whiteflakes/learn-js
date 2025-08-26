function buildAndRequire(modules, entryId) {
  // modules: { id: codeString }
  const cache = {};
  function localRequire(id) {
    if (cache[id]) return cache[id].exports;
    if (!modules[id]) throw new Error('module not found: ' + id);
    const module = { exports: {} };
    cache[id] = module;
    const fn = new Function('exports','require','module', modules[id]);
    fn(module.exports, localRequire, module);
    return module.exports;
  }
  return localRequire(entryId);
}

module.exports = { buildAndRequire };
