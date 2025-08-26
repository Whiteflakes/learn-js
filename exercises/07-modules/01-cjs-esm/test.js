const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { loadModule } = require('./index');

(async () => {
  const tmpDir = path.join(__dirname, 'tmp');
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });

  const cjsPath = path.join(tmpDir, 'mod.cjs.js');
  const esmPath = path.join(tmpDir, 'mod.esm.mjs');

  fs.writeFileSync(cjsPath, 'module.exports = { value: 42 };');
  fs.writeFileSync(esmPath, 'export const value = 99;');

  const c = await loadModule(cjsPath);
  assert.strictEqual(c.type, 'cjs');
  assert.strictEqual(c.mod.value, 42);

  const e = await loadModule(esmPath);
  assert.strictEqual(e.type, 'esm');
  // ESM namespace contains exported name
  assert.strictEqual(e.mod.value, 99);

  console.log('05-modules-cjs-esm: PASS');
})();
