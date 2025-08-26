const { JSDOM } = require('jsdom');
const { createList } = require('./index');

test('createList produces ul with li children', () => {
  const dom = new JSDOM('<!doctype html><html><body></body></html>');
  global.window = dom.window;
  global.document = dom.window.document;
  const ul = createList([1,2,3]);
  expect(ul.children.length).toBe(3);
  expect(ul.children[0].textContent).toBe('1');
  dom.window.close();
});
