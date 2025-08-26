function makeCircuitBreaker({threshold=5} = {}){
  let fails=0; let open=false;
  return {
    call(fn){ try{ const r = fn(); if(open) throw new Error('open'); return r; }catch(e){ fails++; if(fails>=threshold) open=true; throw e; } },
    isOpen(){ return open; }
  };
}
module.exports = { makeCircuitBreaker };
