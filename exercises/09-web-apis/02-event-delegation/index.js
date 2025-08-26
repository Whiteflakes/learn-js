function delegate(container, selector, handler) {
  container.addEventListener('click', function(e) {
    let el = e.target;
    while (el && el !== container) {
      if (el.matches && el.matches(selector)) return handler.call(el, e);
      el = el.parentElement;
    }
  });
}
module.exports = { delegate };
