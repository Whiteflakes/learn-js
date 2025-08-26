function createLocalStorage() {
  const store = {};
  return {
    getItem(k){ return Object.prototype.hasOwnProperty.call(store,k)?store[k]:null },
    setItem(k,v){ store[k]=String(v) },
    removeItem(k){ delete store[k] },
    clear(){ for(const k in store) delete store[k] }
  };
}
module.exports = { createLocalStorage };
