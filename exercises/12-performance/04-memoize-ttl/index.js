function memoizeTtl(fn, ttlMs) {
  const cache = new Map();
  return function(arg) {
    const now = Date.now();
    const e = cache.get(arg);
    if (e && now - e.t < ttlMs) return e.v;
    const v = fn(arg);
    cache.set(arg, { v, t: now });
    return v;
  };
}
module.exports = { memoizeTtl };
