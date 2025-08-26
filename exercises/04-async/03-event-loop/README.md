# Exercise: nextTickOrder (event loop)

Goal: observe ordering of synchronous code, microtasks (Promises), and macrotasks (setTimeout).

Contract
- `nextTickOrder()` returns a Promise that resolves to an array describing the order of events: ['sync','micro','macro'].
