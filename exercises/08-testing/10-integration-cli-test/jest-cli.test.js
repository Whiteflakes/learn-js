const { spawnSync } = require('child_process');
const path = require('path');

const cli = path.resolve(__dirname, '../../../integration/cli.js');

test('profile command prints JSON', () => {
  const out = spawnSync('node', [cli, 'profile', 'Test', '21'], { encoding: 'utf8' });
  expect(out.status).toBe(0);
  const json = JSON.parse(out.stdout);
  expect(json.name).toBe('Test');
  expect(json.age).toBe(21);
});

test('bundle command returns object', () => {
  const out = spawnSync('node', [cli, 'bundle'], { encoding: 'utf8' });
  // bundle prints a line prefixed `bundle entry exports ->`
  expect(out.status).toBe(0);
  expect(out.stdout).toMatch(/bundle entry exports ->/);
});
