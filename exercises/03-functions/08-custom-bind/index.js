function customBind(fn, thisArg, ...presetArgs) {
  return function(...args) {
    return fn.apply(thisArg, presetArgs.concat(args));
  };
}

module.exports = { customBind };
