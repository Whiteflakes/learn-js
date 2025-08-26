const { JSDOM } = require('jsdom');
const { delegate } = require('./index');

test('delegate handles clicks on matching children', () => {
  const dom = new JSDOM('<!doctype html><html><body><div id="c"><button class="btn">x</button></div></body></html>');
  global.window = dom.window; global.document = dom.window.document;
  const container = document.getElementById('c');
  let called = false;
  delegate(container, '.btn', (e) => { called = true; });
  const btn = container.querySelector('.btn');
  btn.click();
  expect(called).toBe(true);
  dom.window.close();
});
