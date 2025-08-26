# Exercise: call2 / apply2

Goal: implement helpers that mimic `Function.prototype.call` and `Function.prototype.apply`.

Contract
- `call2(fn, thisArg, ...args)` calls `fn` with `thisArg` and `args`.
- `apply2(fn, thisArg, argsArray)` calls `fn` with `thisArg` and `argsArray`.

Hints
- Use a unique temporary property on the `thisArg` to call the function, then delete it.
- Handle `null`/`undefined` `thisArg` by using `globalThis`.
