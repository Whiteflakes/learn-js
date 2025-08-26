function createTracer() {
  const records = [];
  return {
    start(label) { const t = Date.now(); records.push({ label, start: t }); return records.length - 1; },
    end(id) { const t = Date.now(); if (records[id]) records[id].end = t; },
    getRecords() { return records.map(r => ({ label: r.label, duration: (r.end || Date.now()) - r.start })); }
  };
}

module.exports = { createTracer };
