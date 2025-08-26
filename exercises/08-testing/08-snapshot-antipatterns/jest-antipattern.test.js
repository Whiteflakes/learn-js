const { generateDynamic } = require('./index');

test('dynamic snapshot should be stabilized before snapshotting', () => {
  const v = generateDynamic();
  // bad snapshot would include timestamp & random numbers
  // instead stabilize
  v.ts = 12345;
  v.data = v.data.map((x)=>({ i: x.i, n: 0 }));
  v.meta.random = 0;
  v.meta.nested.now = '2020-01-01T00:00:00.000Z';

  expect(v).toMatchSnapshot();
});
