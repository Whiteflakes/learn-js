jest.useFakeTimers('modern');
const { memoizeTtl } = require('./index');

test('memoizeTtl caches and expires entries', () => {
  const fn = jest.fn(x => x*2);
  const m = memoizeTtl(fn, 100);
  expect(m(2)).toBe(4);
  expect(fn).toHaveBeenCalledTimes(1);
  // hit
  expect(m(2)).toBe(4);
  expect(fn).toHaveBeenCalledTimes(1);
  // advance time > ttl
  jest.advanceTimersByTime(150);
  expect(m(2)).toBe(4);
  expect(fn).toHaveBeenCalledTimes(2);
});
