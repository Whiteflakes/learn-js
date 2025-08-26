# JS Learning Workspace

Step-by-step JavaScript curriculum from fundamentals to ultra-advanced (tooling, V8 internals, concurrency, tracing, bundling, systems).

How to run the exercises (PowerShell):

```powershell
Set-Location -Path '..\campjs'
npm install
npm test
```

`npm test` runs the custom runner (Node assert style). `npm run test:jest` runs Jest suites.

## Curriculum & Tracking

- Master plan: `.github/LEARNING_PLAN.md`
- Journal template: `notes/TEMPLATE.md`
- Benchmarks log: `BENCH.md`
- Progress heuristic: `npm run progress`

## Helpful scripts

| Script | Purpose |
|--------|---------|
| `npm run rename:exercises` | Normalize module numbering (dry-run unless `--apply`) |
| `npm run progress` | Approx completion percentage across exercises |
| `npm run test:coverage` | Jest coverage (global thresholds enforced) |

## Suggested daily flow

1. Pick next exercise README + hint.
2. Implement/adjust code until tests pass.
3. Journal key insights (notes).
4. Update `BENCH.md` if performance-related.
5. Summarize one concept in your own words.

Happy hacking.
