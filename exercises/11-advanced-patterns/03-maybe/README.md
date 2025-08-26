Simple Maybe wrapper

Implement a tiny Maybe container with a minimal API:

- `Maybe.of(value)` — construct a Maybe
- `map(fn)` — apply `fn` when value is not null/undefined
- `getOrElse(def)` — return inner value or `def` when empty

This exercise teaches safe chaining of nullable computations.

