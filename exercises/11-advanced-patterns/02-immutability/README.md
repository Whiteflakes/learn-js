Immutability utilities

Implement small helpers to make non-destructive updates:

- `shallowClone(value)` — returns a shallow copy of arrays/objects or the value itself for primitives.
- `setIn(obj, path, value)` — returns a new object with `path` (dot-separated) updated without mutating the original.

Hints:
- Use `Object.assign` for cloning plain objects and `Array.prototype.slice` for arrays.

