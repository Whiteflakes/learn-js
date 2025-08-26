# Exercise: memoize

Goal: implement a small memoization helper that caches results for repeated argument lists.

Contract
- Input: a pure function `fn`
- Output: a wrapped function that returns cached results for equal argument lists

Notes
- The provided implementation uses JSON.stringify on arguments (suitable for primitives and simple objects).
