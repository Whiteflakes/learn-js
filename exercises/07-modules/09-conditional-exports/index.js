function resolveExport(pkg, path) {
  // pkg.exports is a mapping of conditions; this is a simple resolver
  if (!pkg.exports) return null;
  const exp = pkg.exports;
  // prefer exact match
  if (exp[path]) return exp[path];
  // fallback to '.'
  if (exp['.']) return exp['.'];
  return null;
}
module.exports = { resolveExport };
