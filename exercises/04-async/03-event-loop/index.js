function nextTickOrder(arr) {
  // Demonstrate order: sync -> microtask (Promise.resolve) -> macrotask (setTimeout)
  const out = [];
  out.push('sync');
  Promise.resolve().then(() => out.push('micro'));
  setTimeout(() => out.push('macro'), 0);
  // Use a slightly larger delay to reliably allow macrotasks (setTimeout 0) to run
  return new Promise((resolve) => setTimeout(() => resolve(out), 30));
}

module.exports = { nextTickOrder };
