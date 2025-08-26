const { safeConcat, splitUtf8 } = require('./index');

test('safeConcat filters empty buffers', () => {
  const a = Buffer.from('a');
  const empty = Buffer.alloc(0);
  const out = safeConcat([a, empty, Buffer.from('b')]);
  expect(out.toString()).toBe('ab');
});

test('splitUtf8 does not split multi-byte chars', () => {
  const s = 'A€B';
  const buf = Buffer.from(s);
  const maybeSplit = Math.floor(buf.length/2);
  const [l,r] = splitUtf8(buf, maybeSplit);
  expect(() => l.toString()).not.toThrow();
  expect(() => r.toString()).not.toThrow();
});
