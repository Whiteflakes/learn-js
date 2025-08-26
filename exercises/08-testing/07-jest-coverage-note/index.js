function analyze(n) {
  if (n < 0) return 'neg';
  if (n === 0) return 'zero';
  if (n % 2 === 0) return 'even';
  return 'odd';
}

module.exports = { analyze };
