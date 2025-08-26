function showThis(fn, thisArg) {
  // Call `fn` with an explicit `this` using call to demonstrate binding
  return fn.call(thisArg);
}

module.exports = { showThis };
