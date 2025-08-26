const { profileSync } = require('./index');

test('profileSync returns result and measures time approximately', () => {
  function work(){ let s=0; for(let i=0;i<10000;i++) s+=i; return s; }
  const out = profileSync(work);
  expect(out.result).toBeGreaterThan(0);
  expect(typeof out.timeMs).toBe('number');
});
