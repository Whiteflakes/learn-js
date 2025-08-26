const { analyze } = require('./index');

test('analyze negative', () => {
  expect(analyze(-3)).toBe('neg');
});

test('analyze zero', () => {
  expect(analyze(0)).toBe('zero');
});

test('analyze even', () => {
  expect(analyze(4)).toBe('even');
});

test('analyze odd', () => {
  expect(analyze(5)).toBe('odd');
});
