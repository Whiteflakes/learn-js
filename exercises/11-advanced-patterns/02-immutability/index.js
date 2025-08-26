function shallowClone(obj) {
  if (Array.isArray(obj)) return obj.slice();
  if (obj && typeof obj === 'object') return Object.assign({}, obj);
  return obj;
}

function setIn(obj, path, value) {
  const keys = path.split('.');
  if (!keys.length) return obj;
  const out = Array.isArray(obj) ? obj.slice() : Object.assign({}, obj);
  let cur = out;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    const next = cur[k];
    const copy = Array.isArray(next) ? next.slice() : (next && typeof next === 'object' ? Object.assign({}, next) : {});
    cur[k] = copy;
    cur = copy;
  }
  cur[keys[keys.length -1]] = value;
  return out;
}

module.exports = { shallowClone, setIn };
