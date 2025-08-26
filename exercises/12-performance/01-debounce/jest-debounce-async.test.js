jest.useFakeTimers('modern');
const { debounce } = require('./index');

test('debounce works with async functions (fn returns a promise)', async () => {
  const asyncFn = jest.fn(() => Promise.resolve('ok'));
  const d = debounce(asyncFn, 100);
  d('a');
  d('b');
  // not called yet
  expect(asyncFn).not.toBeCalled();
  jest.advanceTimersByTime(100);
  // allow pending microtasks (promise) to flush
  await Promise.resolve();
  expect(asyncFn).toHaveBeenCalledTimes(1);
  expect(asyncFn).toHaveBeenCalledWith('b');
});
