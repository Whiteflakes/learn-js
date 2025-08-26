# Exercise: hoistExample

Goal: observe JavaScript hoisting for `var` declarations.

Contract
- `hoistExample()` returns the string result of `typeof x` evaluated before the `var x = 42` line executes.
- Expected return: `'undefined'`.

Notes
- `var` declarations are hoisted and initialized to `undefined` at function start; assignments happen in place.
