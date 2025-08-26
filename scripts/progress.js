#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const base = path.resolve(__dirname, '..', 'exercises');

function collect(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...collect(full));
    else if (ent.isFile() && ent.name === 'test.js') out.push(full);
  }
  return out;
}

const tests = collect(base);
let completed = 0;
for (const f of tests) {
  // crude heuristic: if file contains console.log('PASS') or assert usage
  const src = fs.readFileSync(f, 'utf8');
  if (/PASS/.test(src)) completed++;
}

console.log(`Exercises with tests: ${tests.length}`);
console.log(`Marked complete (heuristic): ${completed}`);
console.log(`Approx completion: ${((completed / tests.length) * 100).toFixed(1)}%`);
