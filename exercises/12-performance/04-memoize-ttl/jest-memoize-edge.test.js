jest.useFakeTimers('modern');
const { memoizeTtl } = require('./index');

test('memoize supports single-arg cache key and expiry', () => {
  const fn = jest.fn(x => x+1);
  const m = memoizeTtl(fn, 50);
  expect(m(1)).toBe(2);
  expect(m(1)).toBe(2);
  jest.advanceTimersByTime(60);
  expect(m(1)).toBe(2);
  expect(fn).toHaveBeenCalledTimes(2);
});
