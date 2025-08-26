function addOuter(a) {
  const b = 2;
  return function(c) {
    return a + b + c;
  };
}

module.exports = { addOuter };
