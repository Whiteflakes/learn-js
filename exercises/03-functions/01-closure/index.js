function makeCounter(start = 0) {
  let n = start;
  return function(delta = 1) {
    n += delta;
    return n;
  };
}

module.exports = { makeCounter };
