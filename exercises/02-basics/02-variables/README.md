Exercise: describeType

Goal: implement a small helper that returns a short, predictable type string for a value.

Contract
- Input: any JavaScript value
- Output: one of the strings: 'null', 'array', 'object', 'number', 'string', 'boolean', 'undefined', 'function', 'symbol', 'bigint'

Hints
- `typeof null` is "object" — treat `null` specially.
- Use `Array.isArray` to detect arrays.

Tests
- A supplied test file asserts common cases and prints `PASS` on success.
