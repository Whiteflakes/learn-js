// Simple plugin-based bundler
// modules: { name: { code, deps: [] } }
// plugins: { transform(code, name)?, finalize(bundle)?, modulePreamble(name)? }
function bundleWithPlugins(modules, entry, plugins = []) {
  const visited = new Set();
  const output = [];

  function applyTransforms(code, name) {
    return plugins.reduce((c, p) => p.transform ? p.transform(c, name) : c, code);
  }

  function visit(name) {
    if (visited.has(name)) return;
    const mod = modules[name];
    if (!mod) throw new Error('Missing module: ' + name);
    (mod.deps || []).forEach(visit);
    visited.add(name);
    const preamble = plugins.map(p => p.modulePreamble && p.modulePreamble(name)).filter(Boolean).join('\n');
    const code = applyTransforms(mod.code, name);
    output.push(`// MODULE ${name}\n${preamble}\n${code}`);
  }
  visit(entry);
  let bundle = output.join('\n');
  bundle = plugins.reduce((b, p) => p.finalize ? p.finalize(b) : b, bundle);
  return bundle;
}

module.exports = { bundleWithPlugins };
