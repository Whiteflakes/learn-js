function createMetrics(){
  const m = new Map();
  return {
    inc(k, n=1){ m.set(k, (m.get(k)||0)+n); },
    get(k){ return m.get(k)||0; }
  };
}
module.exports = { createMetrics };
