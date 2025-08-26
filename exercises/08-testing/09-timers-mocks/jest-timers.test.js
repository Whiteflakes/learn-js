const { delayedSum } = require('./index');

test('delayedSum uses timers - fake timers example', () => {
  jest.useFakeTimers();
  const cb = jest.fn();
  delayedSum(2,3,1000,cb);
  // fast-forward
  jest.advanceTimersByTime(1000);
  expect(cb).toHaveBeenCalledWith(null, 5);
  jest.useRealTimers();
});
