# Benchmark Log

Purpose: Track performance optimizations across exercises (bundler, memoize TTL, scheduler, etc.)

## How to use

1. Pick a scenario (e.g., plugin bundler build of 10 modules).
2. Record baseline timing (ms) using Date.now() before/after or process.hrtime.bigint().
3. Apply optimization (e.g., caching shape classification).
4. Record new timing and compute delta and % improvement.

## Sample Entry

Scenario: plugin bundler (10 modules, 2 plugins)
Baseline: 12.4 ms
Optimization: precompute dependency order via topological sort
New: 8.9 ms
Delta: -3.5 ms (-28.2%)
Notes: Reduced redundant DFS traversals.

## Log

| Date | Scenario | Baseline (ms) | New (ms) | Delta (ms) | Improvement % | Notes |
|------|----------|---------------|----------|------------|---------------|-------|
