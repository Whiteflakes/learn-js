jest.useFakeTimers('modern');
const { debounce } = require('./index');

test('debounce delays calls and uses last arguments', () => {
  const fn = jest.fn();
  const d = debounce(fn, 100);
  d(1);
  d(2,3);
  // not called immediately
  expect(fn).not.toBeCalled();
  // advance time to trigger
  jest.advanceTimersByTime(100);
  expect(fn).toHaveBeenCalledTimes(1);
  expect(fn).toHaveBeenCalledWith(2,3);
  // calling again schedules new call
  d(9);
  jest.advanceTimersByTime(100);
  expect(fn).toHaveBeenCalledTimes(2);
});
