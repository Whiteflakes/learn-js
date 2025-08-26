// Inline cache (IC) shape stability simulator
// Tracks property access patterns and counts monomorphic vs polymorphic sites.
function createICTracker() {
  const sites = new Map(); // key: site label -> { shapes: Set, total:number }
  function access(site, obj, prop) {
    const shape = Object.keys(obj).sort().join(',');
    let rec = sites.get(site);
    if (!rec) { rec = { shapes: new Set(), total: 0 }; sites.set(site, rec); }
    rec.shapes.add(shape);
    rec.total++;
    return obj[prop];
  }
  function report() {
    const out = {};
    for (const [site, rec] of sites.entries()) {
      const kind = rec.shapes.size === 1 ? 'monomorphic' : (rec.shapes.size <= 4 ? 'polymorphic' : 'megamorphic');
      out[site] = { kind, total: rec.total, variants: rec.shapes.size };
    }
    return out;
  }
  return { access, report };
}

module.exports = { createICTracker };
