// Simulated tsserver plugin that adds a simple refactor suggestion: wrap selection in try/catch
function getRefactors(code, selectionStart, selectionEnd) {
  const snippet = code.slice(selectionStart, selectionEnd);
  if (!snippet.trim()) return [];
  return [{
    name: 'wrap-try-catch',
    description: 'Wrap selection in try/catch',
    apply() {
      return code.slice(0, selectionStart) + 'try {\n' + snippet + '\n} catch (e) { console.error(e); }' + code.slice(selectionEnd);
    }
  }];
}

module.exports = { getRefactors };
