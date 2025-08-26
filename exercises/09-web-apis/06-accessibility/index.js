function validateButtonAccessible(btn) {
  return btn.hasAttribute('role') || btn.hasAttribute('aria-label');
}
module.exports = { validateButtonAccessible };
