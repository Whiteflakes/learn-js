function curry(fn) {
  function curried(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    return function(...more) {
      return curried.apply(this, args.concat(more));
    };
  }
  return curried;
}

module.exports = { curry };
