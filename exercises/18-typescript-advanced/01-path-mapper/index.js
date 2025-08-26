// Simple path-mapping resolver for TypeScript-like aliases
// config: { baseUrl?: string, paths?: { alias/*: ['target/*'] } }
function resolveImport(importPath, config) {
  const { baseUrl = '.', paths = {} } = config || {};

  // direct match
  if (importPath.startsWith('./') || importPath.startsWith('../') || importPath.startsWith('/')) {
    return importPath;
  }

  for (const [pattern, targets] of Object.entries(paths)) {
    // support patterns like "@app/*"
    if (!pattern.includes('*')) continue;
    const [prefix] = pattern.split('*');
    if (importPath.startsWith(prefix)) {
      const remainder = importPath.slice(prefix.length);
      // try targets in order
      for (const t of targets) {
        const target = t.replace('*', remainder);
        // resolve relative to baseUrl
        return baseUrl.replace(/\/$/, '') + '/' + target.replace(/^\/+/, '');
      }
    }
  }

  // fallback: return as-is
  return importPath;
}

module.exports = { resolveImport };
