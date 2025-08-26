# Exercise: createCounters (closure pitfalls)

Goal: show how `let` avoids the classic closure loop pitfall when capturing loop variables.

Contract
- `createCounters(n)` returns an array of `n` functions; the i-th function returns `i` when called.

Notes
- Using `var` inside the loop would capture the same variable for all closures; `let` creates a new binding per iteration.
