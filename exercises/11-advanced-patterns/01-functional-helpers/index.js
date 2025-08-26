function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    return (...more) => curried.apply(this, args.concat(more));
  };
}

function compose(...fns) {
  return function (arg) {
    return fns.reduceRight((acc, fn) => fn(acc), arg);
  };
}

module.exports = { curry, compose };
