jest.useFakeTimers('modern');
const { throttle } = require('./index');

test('throttle preserves this context and arguments', () => {
  const ctx = { val: 1 };
  function fn(x){ this.val = x; }
  const t = throttle(fn, 100);
  t.call(ctx, 5);
  expect(ctx.val).toBe(5);
  // ignored within window
  t.call(ctx, 6);
  expect(ctx.val).toBe(5);
});
