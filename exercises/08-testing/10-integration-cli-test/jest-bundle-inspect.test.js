let buildAndRequire;
const candidates = [
  '../../06-modules/05-bundler-exec/index',
  '../../07-modules/05-bundler-exec/index',
  '../../05-modules/05-bundler-exec/index'
];
for (const c of candidates) {
  try { buildAndRequire = require(c).buildAndRequire; break; } catch (_) {}
}
if (!buildAndRequire) throw new Error('Cannot locate buildAndRequire implementation');

test('buildAndRequire returns correct exports for simple module', () => {
  const modules = {
    'a': `module.exports = { val: 42, fn: () => 'ok' }`
  };
  const out = buildAndRequire(modules, 'a');
  expect(out.val).toBe(42);
  expect(typeof out.fn).toBe('function');
  expect(out.fn()).toBe('ok');
});
