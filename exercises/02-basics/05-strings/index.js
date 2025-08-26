function reverseString(s) {
  if (typeof s !== 'string') throw new TypeError('expected string');
  return s.split('').reverse().join('');
}

module.exports = { reverseString };
