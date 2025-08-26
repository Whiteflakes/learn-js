function call2(fn, thisArg, ...args) {
  const ctx = (thisArg === null || thisArg === undefined) ? globalThis : Object(thisArg);
  const key = Symbol('fn');
  ctx[key] = fn;
  try {
    return ctx[key](...args);
  } finally {
    delete ctx[key];
  }
}

function apply2(fn, thisArg, argsArray) {
  const ctx = (thisArg === null || thisArg === undefined) ? globalThis : Object(thisArg);
  const key = Symbol('fn');
  ctx[key] = fn;
  try {
    return ctx[key](...(argsArray || []));
  } finally {
    delete ctx[key];
  }
}

module.exports = { call2, apply2 };
