const { curry, compose } = require('./index');

test('curry partial application', () => {
  function sum(a,b,c){ return a+b+c; }
  const s = curry(sum);
  expect(s(1)(2)(3)).toBe(6);
  expect(s(1,2)(3)).toBe(6);
});

test('compose right-to-left', () => {
  const double = x => x*2;
  const inc = x => x+1;
  const f = compose(double, inc);
  expect(f(2)).toBe(6);
});
