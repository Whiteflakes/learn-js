function simpleBundle(modules) {
  // modules: { id: codeString }
  // returns a single string that contains all modules wrapped in a simple loader
  let out = '(function(){\nvar __modules = {};\n';
  for (const id of Object.keys(modules)) {
    out += `// module ${id}\n__modules['${id}'] = function(exports, require){\n${modules[id]}\n};\n`;
  }
  out += '\n__modules;\n})();\n';
  return out;
}

module.exports = { simpleBundle };
