function delayedValue(value, ms) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

module.exports = { delayedValue };
