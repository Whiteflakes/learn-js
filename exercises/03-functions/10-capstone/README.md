# Exercise: Module-2 Capstone

Goal: combine closures and `this` binding.

Contract
- `createPerson(name)` returns `{ obj, bound }`, where `obj` has closure-backed getters/setters and a `greet` method that relies on `this.publicName`.
- `bound.greet` is the same method bound to `obj`, so it can be called detached and still work.

Tests verify closure-backed state and bound method behaviour.
