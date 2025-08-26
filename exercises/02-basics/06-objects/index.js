function deepClone(obj) {
  // Simple deep clone suitable for plain JSON-compatible objects
  return JSON.parse(JSON.stringify(obj));
}

module.exports = { deepClone };
