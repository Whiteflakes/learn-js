function simulatePublish(pkg) {
  // Simple validation: ensure name and version
  if (!pkg.name) throw new Error('name required');
  if (!pkg.version) throw new Error('version required');
  return { ok: true, publishedAt: new Date().toISOString() };
}
module.exports = { simulatePublish };
