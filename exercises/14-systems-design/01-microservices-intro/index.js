function makeDispatcher() {
  const handlers = new Map();
  return {
    register(name, fn) { handlers.set(name, fn); },
    dispatch(name, payload) { const h = handlers.get(name); if(!h) throw new Error('no handler'); return h(payload); }
  };
}
module.exports = { makeDispatcher };
