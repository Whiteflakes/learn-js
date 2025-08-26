function manualNew(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype);
  const res = Constructor.apply(obj, args);
  return (res !== null && (typeof res === 'object' || typeof res === 'function')) ? res : obj;
}

module.exports = { manualNew };
