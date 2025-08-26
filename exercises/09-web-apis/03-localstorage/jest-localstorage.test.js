const { createLocalStorage } = require('./index');

test('localStorage shim set/get/remove/clear', ()=>{
  const s = createLocalStorage();
  s.setItem('a', '1');
  expect(s.getItem('a')).toBe('1');
  s.removeItem('a');
  expect(s.getItem('a')).toBe(null);
  s.setItem('b', '2'); s.clear();
  expect(s.getItem('b')).toBe(null);
});
