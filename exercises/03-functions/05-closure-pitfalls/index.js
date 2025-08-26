function createCounters(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(function() { return i; });
  }
  return arr;
}

module.exports = { createCounters };
