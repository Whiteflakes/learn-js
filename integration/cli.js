#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Reuse the makeProfile if present
let makeProfile;
try {
  // Updated path after module renumbering (testing now under 08-testing)
  makeProfile = require('../exercises/08-testing/04-jest-snapshot/index').makeProfile;
} catch (e) {
  makeProfile = (name, age) => ({ name, age });
}

// tiny bundler runner using buildAndRequire if available
let buildAndRequire = null;
const bundlerPaths = [
  '../exercises/06-modules/05-bundler-exec/index',
  '../exercises/07-modules/05-bundler-exec/index',
  '../exercises/05-modules/05-bundler-exec/index'
];
for (const p of bundlerPaths) {
  if (buildAndRequire) break;
  try {
    buildAndRequire = require(p).buildAndRequire;
  } catch (_) {
    // continue
  }
}

const argv = process.argv.slice(2);
const cmd = argv[0];

if (cmd === 'profile') {
  const name = argv[1] || 'Anon';
  const age = Number(argv[2] || 20);
  const p = makeProfile(name, age);
  console.log(JSON.stringify(p, null, 2));
  process.exit(0);
}

if (cmd === 'bundle') {
  if (!buildAndRequire) {
    console.error('bundler not available in this workspace');
    process.exit(2);
  }
  // build a tiny module map from existing exercises: use one small module
  const modules = {
    'entry': `module.exports = { msg: 'Hello from bundle' }`
  };
  const result = buildAndRequire(modules, 'entry');
  console.log('bundle entry exports ->', result);
  process.exit(0);
}

console.log('Usage: node cli.js <profile|bundle>');
process.exit(1);
