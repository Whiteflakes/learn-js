const assert = require('assert');
const { lineSplit } = require('./index');
const { Readable } = require('stream');

module.exports = function() {
  const r = new Readable({ read() {} });
  const s = lineSplit();
  const out = [];
  s.on('data', d => out.push(d));
  r.pipe(s);
  r.push('line1\nli');
  r.push('ne2\nline3');
  r.push(null);
  s.on('end', () => {
    try {
      assert.deepStrictEqual(out, ['line1','line2','line3']);
      console.log('08-node-internals-advanced-streams: PASS');
    } catch (e) { throw e; }
  });
};
