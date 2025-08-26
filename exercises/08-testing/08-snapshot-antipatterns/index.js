function generateDynamic() {
  return {
    ts: Date.now(),
    data: new Array(50).fill(0).map((_,i)=>({ i, n: Math.random() })),
    meta: { random: Math.random(), nested: { now: new Date().toISOString() } }
  };
}
module.exports = { generateDynamic };
