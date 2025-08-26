const { JSDOM } = require('jsdom');
const { delegate } = require('./index');

test('nested matches and stopPropagation behavior', () => {
  const dom = new JSDOM('<!doctype html><html><body><div id="c"><div class="wrap"><button class="btn">x</button></div></div></body></html>');
  global.window = dom.window; global.document = dom.window.document;
  const container = document.getElementById('c');
  let called = 0;
  delegate(container, '.btn', (e) => { called++; });
  const btn = container.querySelector('.btn');
  // simulate a handler that stops propagation before delegate
  btn.addEventListener('click', (e)=> e.stopPropagation());
  btn.click();
  // since inner handler stopped propagation, delegate's handler should not be called
  expect(called).toBe(0);
  dom.window.close();
});
