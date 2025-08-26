// Hidden class transition simulator
function createHiddenClassTracker() {
  const transitions = new Map(); // key: currentShape + '::' + prop -> newShape
  const counts = new Map();

  function shapeOf(obj) { return Object.keys(obj).join(','); }

  function addProp(obj, prop, value) {
    const before = shapeOf(obj);
    obj[prop] = value;
    const after = shapeOf(obj);
    const key = before + '::' + prop;
    if (!transitions.has(key)) transitions.set(key, after);
    counts.set(after, (counts.get(after) || 0) + 1);
    return after;
  }

  function report() {
    return { transitionCount: transitions.size, shapes: [...counts.entries()].sort((a,b)=>b[1]-a[1]) };
  }

  return { addProp, report };
}

module.exports = { createHiddenClassTracker };
