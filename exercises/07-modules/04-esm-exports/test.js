const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { inspectEsm } = require('./index');

(async () => {
  const tmpDir = path.join(__dirname, 'tmp');
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
  const esmPath = path.join(tmpDir, 'ex.mjs');
  fs.writeFileSync(esmPath, 'export default 1; export const a = 2;');
  const info = await inspectEsm(esmPath);
  assert.strictEqual(info.hasDefault, true);
  assert.ok(info.keys.includes('a'));
  console.log('05-modules-esm-exports: PASS');
})();
