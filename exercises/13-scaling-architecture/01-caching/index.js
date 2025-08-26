function createCache(){
  const map = new Map();
  return {
    set(k,v,ttl){ const expires = Date.now() + ttl; map.set(k,{v,expires}); },
    get(k){ const e = map.get(k); if(!e) return undefined; if(Date.now()>e.expires){ map.delete(k); return undefined;} return e.v; }
  };
}
module.exports = { createCache };
