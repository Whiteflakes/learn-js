# Exercise: addOuter (scope chain / execution context)

Goal: demonstrate closure capturing variables from outer execution contexts.

Contract
- `addOuter(a)` returns a function that accepts `c` and returns `a + 2 + c`.
- Tests call the returned function to verify captured state.
