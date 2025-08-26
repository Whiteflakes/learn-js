const { shallowClone, setIn } = require('./index');

test('setIn does not mutate original', () => {
  const obj = { a: { b: 1 } };
  const out = setIn(obj, 'a.b', 2);
  expect(obj.a.b).toBe(1);
  expect(out.a.b).toBe(2);
});

test('shallowClone clones arrays', () => {
  const a = [1,2,3];
  const c = shallowClone(a);
  c.push(4);
  expect(a.length).toBe(3);
});
