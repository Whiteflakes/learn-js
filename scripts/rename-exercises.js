#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const exercisesDir = path.resolve(__dirname, '..', 'exercises');

function readDirs() {
  return fs.readdirSync(exercisesDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);
}

function parsePrefix(name) {
  const m = name.match(/^([0-9]{2,})-(.+)$/);
  if (!m) return null;
  return { prefix: m[1], rest: m[2] };
}

function proposeRenames(names) {
  const groups = {};
  names.forEach(n => {
    const p = parsePrefix(n);
    if (p) {
      groups[p.prefix] = groups[p.prefix] || [];
      groups[p.prefix].push(n);
    }
  });

  const proposals = [];
  const used = new Set();
  // build a sorted list of names without numeric collisions
  let nextNum = 1;
  names.sort();
  for (const name of names) {
    const p = parsePrefix(name);
    if (!p) {
      // assign next available
      let num = String(nextNum).padStart(2, '0');
      while (used.has(num)) { nextNum++; num = String(nextNum).padStart(2, '0'); }
      used.add(num);
      proposals.push({ from: name, to: `${num}-${name}` });
      nextNum++;
      continue;
    }
    if (!used.has(p.prefix)) {
      used.add(p.prefix);
      proposals.push({ from: name, to: name });
    } else {
      // collision: find next free
      let num = String(nextNum).padStart(2, '0');
      while (used.has(num)) { nextNum++; num = String(nextNum).padStart(2, '0'); }
      used.add(num);
      proposals.push({ from: name, to: `${num}-${p.rest}` });
      nextNum++;
    }
  }
  return proposals;
}

function applyProposals(proposals, dryRun) {
  for (const p of proposals) {
    if (p.from === p.to) continue;
    const from = path.join(exercisesDir, p.from);
    const to = path.join(exercisesDir, p.to);
    console.log(`${dryRun ? '[DRY]' : '[MOVE]'} ${p.from} -> ${p.to}`);
    if (!dryRun) {
      if (fs.existsSync(to)) {
        console.error('Target exists, skipping:', p.to);
        continue;
      }
      fs.renameSync(from, to);
    }
  }
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.indexOf('--apply') === -1;
  const names = readDirs();
  const proposals = proposeRenames(names);
  console.log('Proposed renames:');
  proposals.forEach(p => console.log(`  ${p.from} -> ${p.to}`));
  console.log('\nRun with --apply to perform changes.');
  applyProposals(proposals, dryRun);
}

main();
