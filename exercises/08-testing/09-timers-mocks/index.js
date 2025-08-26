function delayedSum(a, b, ms, cb) {
  setTimeout(() => cb(null, a + b), ms);
}
module.exports = { delayedSum };
