function unique(arr) {
  // returns a new array with duplicates removed (shallow equality)
  return Array.from(new Set(arr));
}

module.exports = { unique };
