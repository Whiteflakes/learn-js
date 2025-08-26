function arrowThisDemo() {
  const obj = {
    x: 1,
    normal() { return this.x; },
    arrow: () => { return this.x; }
  };
  // normal should read 1 when called as method; arrow ignores call binding
  return [obj.normal(), obj.arrow()];
}

module.exports = { arrowThisDemo };
