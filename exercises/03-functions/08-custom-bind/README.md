# Exercise: customBind

Goal: implement a simple `bind`-like helper that fixes `this` and optionally presets initial arguments.

Contract
- `customBind(fn, thisArg, ...preset)` returns a function that calls `fn` with `thisArg` and arguments `preset.concat(runtimeArgs)`.
