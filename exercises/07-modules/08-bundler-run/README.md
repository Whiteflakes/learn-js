# Exercise: runBundle

Goal: execute a simple bundle string in a sandboxed VM and return the entry exports.

Contract
- `runBundle(bundleCode)` runs the generated bundle (which should populate `__modules`) and returns the exports of module `main`.
