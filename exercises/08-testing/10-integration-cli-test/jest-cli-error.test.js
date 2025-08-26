const { spawnSync } = require('child_process');
const path = require('path');

const cli = path.resolve(__dirname, '../../../integration/cli.js');

test('no args prints usage and exits non-zero', () => {
  const out = spawnSync('node', [cli], { encoding: 'utf8' });
  expect(out.status).toBe(1);
  expect(out.stdout).toMatch(/Usage: node cli.js/);
});
