jest.useFakeTimers('modern');
const { throttle } = require('./index');

test('throttle allows one call per interval', () => {
  const fn = jest.fn();
  const t = throttle(fn, 100);
  // first call goes through
  t(1);
  expect(fn).toHaveBeenCalledTimes(1);
  // rapid calls within window ignored
  t(2); t(3);
  expect(fn).toHaveBeenCalledTimes(1);
  // advance time beyond window
  jest.advanceTimersByTime(100);
  t(4);
  expect(fn).toHaveBeenCalledTimes(2);
});
