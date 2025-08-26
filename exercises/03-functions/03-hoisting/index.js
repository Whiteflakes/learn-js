function hoistExample() {
  // 'var' declarations are hoisted and initialized to undefined before execution
  // So `typeof x` here should be 'undefined', even though `x` is declared later.
  function inner() {
    return typeof x;
  }
  var x = 42;
  return inner();
}

module.exports = { hoistExample };
