// Very small bundler: combine modules into a single string in dependency order
function bundle(modules, entry) {
  // modules: { 'path': { code: string, deps: ['dep1', ...] } }
  const visited = new Set();
  const out = [];

  function visit(p) {
    if (visited.has(p)) return;
    const m = modules[p];
    if (!m) throw new Error('Missing module: ' + p);
    (m.deps || []).forEach(visit);
    visited.add(p);
    out.push(`// MODULE: ${p}\n` + m.code);
  }

  visit(entry);
  return out.join('\n');
}

module.exports = { bundle };
