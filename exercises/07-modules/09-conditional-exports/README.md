# Exercise: package "exports" resolver

Goal: implement a tiny resolver for `package.json` `exports` field to pick the right entry for a requested path.

Contract
- `resolveExport(pkg, path)` returns the mapped path or the '.' fallback.
