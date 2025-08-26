function simpleTransform(code) {
  // very small transform: convert `let` to `var` as demonstration
  return code.replace(/\blet\b/g, 'var');
}
module.exports = { simpleTransform };
