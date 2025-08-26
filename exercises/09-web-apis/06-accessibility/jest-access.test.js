const { JSDOM } = require('jsdom');
const { validateButtonAccessible } = require('./index');

test('validateButtonAccessible returns true when aria or role present', () => {
  const dom = new JSDOM('<!doctype html><html><body></body></html>');
  global.window = dom.window; global.document = dom.window.document;
  const btn = document.createElement('button');
  btn.setAttribute('aria-label', 'close');
  expect(validateButtonAccessible(btn)).toBe(true);
  dom.window.close();
});
