function bindAll(obj, fnNames) {
  const out = {};
  for (const name of fnNames) {
    if (typeof obj[name] !== 'function') continue;
    out[name] = obj[name].bind(obj);
  }
  return out;
}

module.exports = { bindAll };
