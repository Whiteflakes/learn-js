const { lineSplit } = require('./index');
const { Readable } = require('stream');

test('lineSplit splits across chunk boundaries', done => {
  const r = new Readable({ read(){} });
  const s = lineSplit();
  const out = [];
  s.on('data', d => out.push(d));
  s.on('end', () => {
    expect(out).toEqual(['line1','line2','line3']);
    done();
  });
  r.pipe(s);
  r.push('line1\nli');
  r.push('ne2\nline3');
  r.push(null);
});
