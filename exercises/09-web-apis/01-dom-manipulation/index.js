function createList(items) {
  const ul = global.document.createElement('ul');
  items.forEach(i => {
    const li = global.document.createElement('li');
    li.textContent = String(i);
    ul.appendChild(li);
  });
  return ul;
}
module.exports = { createList };
