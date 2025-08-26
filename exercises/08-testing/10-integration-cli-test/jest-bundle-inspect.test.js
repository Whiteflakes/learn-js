const { buildAndRequire } = require('../../05-modules/05-bundler-exec/index');

test('buildAndRequire returns correct exports for simple module', () => {
  const modules = {
    'a': `module.exports = { val: 42, fn: () => 'ok' }`
  };
  const out = buildAndRequire(modules, 'a');
  expect(out.val).toBe(42);
  expect(typeof out.fn).toBe('function');
  expect(out.fn()).toBe('ok');
});
