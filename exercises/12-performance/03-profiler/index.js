function profileSync(fn) {
  const start = Date.now();
  const res = fn();
  const end = Date.now();
  return { result: res, timeMs: end - start };
}
module.exports = { profileSync };
