# Exercise: CJS vs ESM loader

Goal: implement a small helper that can load either CommonJS or ESM modules and indicate which type was loaded.

Contract
- `loadModule(filePath)` returns a Promise resolving to `{ type: 'cjs'|'esm', mod }`.

Notes
- Tests create small temp CJS and ESM files to validate behavior.
