const { Transform } = require('stream');

function lineSplit() {
  let carry = '';
  return new Transform({
    decodeStrings: false,
    readableObjectMode: true,
    transform(chunk, enc, cb) {
      carry += String(chunk);
      const parts = carry.split(/\r?\n/);
      carry = parts.pop();
      for (const p of parts) this.push(p);
      cb();
    },
    flush(cb) { if (carry) this.push(carry); cb(); }
  });
}

module.exports = { lineSplit };
