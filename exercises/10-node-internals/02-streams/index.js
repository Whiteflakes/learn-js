const { Transform } = require('stream');
function upperTransform() {
  return new Transform({
    decodeStrings: false,
    transform(chunk, enc, cb) {
      try { cb(null, String(chunk).toUpperCase()); } catch (e) { cb(e); }
    }
  });
}
module.exports = { upperTransform };
