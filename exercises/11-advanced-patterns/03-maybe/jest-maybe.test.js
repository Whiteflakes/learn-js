const { Maybe } = require('./index');

test('Maybe maps and returns default', () => {
  const m = Maybe.of(3).map(x => x+1);
  expect(m.getOrElse(0)).toBe(4);
  const n = Maybe.of(null).map(x => x+1);
  expect(n.getOrElse(5)).toBe(5);
});
