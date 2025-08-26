Exercise: curry

Goal: implement a simple currying helper that allows calling a multi-argument function one argument at a time, or with multiple arguments.

Contract
- Input: a function `fn` with a fixed `fn.length` arity
- Output: a curried version that can be called partially until enough args are provided

Hints
- The curried function should accept any number of arguments each call and return either the result (when enough args) or another function.

Tests
- Provided tests verify several calling styles.
