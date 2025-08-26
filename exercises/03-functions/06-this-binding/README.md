# Exercise: showThis (this binding)

Goal: demonstrate how `this` can be set explicitly with `Function.prototype.call`.

Contract
- `showThis(fn, thisArg)` calls `fn` with `thisArg` and returns the result.

Notes
- This helps when a method is passed around and loses its original `this`.
