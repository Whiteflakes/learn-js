const { makeProfile } = require('./index');

test('makeProfile snapshot', () => {
  const p = makeProfile('Alice', 30);
  // Normalize the id so snapshot is stable
  p.id = 'alice-TS';
  expect(p).toMatchSnapshot();
});
