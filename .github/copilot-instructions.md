## Quick orientation for automated coding agents

This repository is a hands-on JavaScript learning workspace composed of small, self-contained exercises grouped by module. The guidance below highlights the concrete patterns and commands an AI agent needs to be productive here.

### Big picture
- Exercises are organized under `exercises/<module-number>-<module-name>/<exercise-id>/`.
- Each exercise is a tiny unit: `index.js` (implementation), `test.js` (node-style test used by the custom runner) and usually `README.md` and optional `hint.txt`.
- There are also Jest-based exercises under the same tree — their tests are named `jest-*.test.js` and are executed by Jest.
- The `integration/cli.js` ties Modules 1–5 together and is used by integration tests.

Key files to inspect first: `exercises/runner.js`, `package.json`, `jest.config.cjs`, `.github/workflows/nodejs-tests.yml`, and `integration/cli.js`.

### Test / build / debug workflows
- Local quick run (PowerShell):
  ```powershell
  Set-Location -Path 'D:\Programming\learn\campjs'
  npm install
  npm test            # runs the custom test runner (executes every exercises/**/test.js)
  npm run test:jest   # runs Jest suites (exercises/**/jest-*.test.js)
  npm run test:coverage # runs jest with coverage and enforces thresholds
  npm run ci         # lint + coverage + all tests (defined in package.json)
  node integration/cli.js profile Alice 30
  ```
- The custom runner (`exercises/runner.js`) recursively requires `test.js` files. On a thrown error it prints the test's `hint.txt` (if present) and sets the process exit code.
  - To add a new exercise that runs under the runner, include a `test.js` that either throws/asserts on failure or uses Node `assert`.
- Jest configuration: `jest.config.cjs` controls test match (`exercises/**/jest-*.test.js`) and coverage thresholds. Snapshots live next to tests under `__snapshots__/`.

### Project-specific conventions & patterns
- Two parallel testing styles coexist:
  1. Minimal Node test files named `test.js` used by the custom runner (use Node `assert` and throw on failure). Many exercises print a `PASS` or rely on runner success.
  2. Jest suites named `jest-*.test.js` for snapshot, mocking, timers, and integration tests.
- Exercises should follow the small contract pattern in each `README.md` (inputs/outputs). The runner expects `test.js`; failing to include it will skip automated validation.
- Hints: place a `hint.txt` in the exercise folder — the runner prints it on failure. Use short, diagnostic, actionable hints (file paths are printed by the runner).
- Bundler runtime: prefer `buildAndRequire` (see `exercises/05-modules/05-bundler-exec/index.js`) for in-memory module execution rather than fragile `vm` evaluation of bundle strings.
- Integration tests spawn the real CLI with `child_process.spawnSync` and assert stdout/status (see `exercises/06-testing/10-integration-cli-test/`).

### CI and coverage
- Workflow: `.github/workflows/nodejs-tests.yml` checks out, installs, lints, runs the custom runner, runs Jest, runs coverage (`npm run test:coverage`) and uploads the `coverage/` folder as an artifact.
- Jest enforces coverage thresholds in `jest.config.cjs` (global defaults currently set to ~70% — update there if thresholds are changed).

### How to add a new exercise (step-by-step)
1. Create folder `exercises/<module>/<id>-<name>/`.
2. Add `index.js` (implementation) and `test.js` (Node-style for the runner). If you want a Jest test, add `jest-*.test.js` instead and it will be picked up by Jest.
3. Add `README.md` with a short contract and an optional `hint.txt` for interactive guidance.
4. Run `npm test` and/or `npm run test:jest` locally. Fix failing tests; the runner will print `hint.txt` automatically on failure.

### Common pitfalls observed in this codebase
- Flaky timing tests: prefer slightly larger timeouts for macrotask ordering (some event-loop exercises used 30ms instead of 10ms to avoid flakiness).
- Dynamic data in snapshots: stabilize timestamps/IDs before snapshotting (see `exercises/06-testing/08-snapshot-antipatterns`).
- ESM vs CJS: loader behavior sometimes checks extensions (`.mjs`/`.mts`). For module loader exercises, prefer dynamic `import()` for ESM and `require()` fallback for CJS (see `exercises/05-modules/01-cjs-esm`).

### Integration & external deps
- Dev dependencies used in tests: `jest` and `sinon` are present; avoid adding heavy global deps without updating `package.json`.
- The repo intentionally avoids external services; integration tests spawn local processes (no network calls expected in tests).

### Files and symbols to reference in PRs or patches
- `exercises/runner.js` — custom runner behavior and hint printing
- `package.json` — scripts: `test`, `test:jest`, `test:coverage`, `ci`, `integration`
- `jest.config.cjs` — testMatch and coverageThreshold
- `integration/cli.js` — small CLI used by integration tests
- `exercises/**/README.md` — each exercise contract and hints

If anything above is unclear or you want additional, machine-readable rules (for example: a strict linter config, test timeout constants, or a list of acceptable external packages), tell me which area to expand and I'll update this doc.
