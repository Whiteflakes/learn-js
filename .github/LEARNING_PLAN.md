# Learning Plan — JS to Ultra-Advanced

Goal

This workspace (campjs) will be a single-path curriculum that takes you from beginner JavaScript to an ultra-advanced level suitable for systems, libraries, tooling, performance, and architecture work.

How to use this plan

- Read modules in order. Each top-level folder under `exercises/` is a module that contains small exercises. Complete the exercises, run the tests, and read the README/hint files.
- The curriculum is split into modules (foundation -> core -> advanced -> systems). A script `scripts/rename-exercises.js` is provided to normalize module folder numbering if you want canonical order on disk.
- Periodically run `npm test` and `npm run test:jest` to validate progress.

High-level module roadmap

01 - Hello (core JS syntax, env)
02 - Basics (variables, arrays, strings, objects)
03 - Functions (closures, higher-order, this, bind, new)
04 - Async (promises, async/await, event-loop, timers)
05 - Build Tooling (bundlers, babel, typescript intro)
06 - Modules (CJS/ESM, exports, package exports)
07 - Testing (assert basics, jest, mocking, timers)
08 - Web APIs (DOM, fetch, storage, accessibility)
09 - Node Internals (child_process, streams, buffers, workers)
10 - Advanced Patterns (functional helpers, immutability, maybe)
11 - Performance (debounce, throttle, profiler, memoize-ttl)
12 - Scaling & Architecture (caching, clustering, observability)
13 - Systems Design (microservices, API design, contract testing)
14 - Security & Observability (auth, tracing, secure patterns)

Roadmap checkpoints

- Milestone 1 (Modules 01-04): Core language mastery (2-4 weeks)
- Milestone 2 (Modules 05-07): Tooling and testing (2-4 weeks)
- Milestone 3 (Modules 08-10): Browser & Node advanced internals (4-6 weeks)
- Milestone 4 (Modules 11-14): Performance, scaling, systems design (ongoing)

How I'll help (automation built into this repo)

- `scripts/rename-exercises.js`: safely suggests and optionally applies renames for module folders that have numbering collisions.
- `.github/LEARNING_PLAN.md`: this file (use it as a living document).
- I'll propose new exercises and PR-style patches as you ask. If you want me to implement a topic, tell me the module and exercise level.

Suggestions and next steps

- Run the rename script in dry-run to see suggested normalizations: `node scripts/rename-exercises.js --dry-run`.
- If the proposals look good run with `--apply` to rename folders on disk.
- Ask me to add specific advanced modules (TypeScript deep-dive, engines & V8, compiler tooling, async scheduling, real-world system design exercises).

Notes

- I intentionally don't force-rename files without your confirmation: the script defaults to dry-run to prevent surprises.
- The curriculum ordering is logical, not tied to exact folder names; the runner scans `exercises/` recursively so tests will keep working.

Requirements coverage

- Normalize naming collisions: provided a safe script to inspect and apply.
- Add scaffolding plan in `.github/LEARNING_PLAN.md`: done.
- Update exercises/naming inconsistencies: script suggests mappings and can apply them with `--apply`.

Created by automation to help structure the learning journey.
