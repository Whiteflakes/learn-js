const assert = require('assert');
const { upperTransform } = require('./index');

module.exports = function(done) {
  const t = upperTransform();
  const out = [];
  t.on('data', (c)=> out.push(String(c)));
  t.write('a'); t.write('b'); t.end();
  // wait briefly
  setTimeout(()=>{
    assert.strictEqual(out.join(''), 'AB');
    console.log('08-node-internals-streams: PASS');
  }, 20);
};
