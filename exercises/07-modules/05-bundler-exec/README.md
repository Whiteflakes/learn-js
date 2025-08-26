# Exercise: buildAndRequire

Goal: simulate a bundler runtime by building a simple in-memory require and executing a module by id.

Contract
- `buildAndRequire(modules, entryId)` returns the exports object of `entryId`.
