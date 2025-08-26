const assert = require('assert');
const { profileSync } = require('./index');

module.exports = function() {
  const { result, timeMs } = profileSync(() => {
    let s = 0; for (let i=0;i<1000;i++) s += i;
    return s;
  });
  assert(typeof result === 'number');
  assert(timeMs >= 0);
};
