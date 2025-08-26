const { bindAll } = require('../../02-basics/03-arrays/..');
// Note: we won't require bindAll here to avoid circular imports; implement a small local binder
function bindAllLocal(obj, fnNames) {
  const out = {};
  for (const name of fnNames) {
    if (typeof obj[name] !== 'function') continue;
    out[name] = obj[name].bind(obj);
  }
  return out;
}

function createPerson(name) {
  let privateName = name;
  const obj = {
    publicName: name,
    getName() { return privateName; },
    setName(n) { privateName = n; this.publicName = n; },
    greet() { return `Hi, I'm ${this.publicName}`; }
  };
  const bound = bindAllLocal(obj, ['greet']);
  return { obj, bound };
}

module.exports = { createPerson };
