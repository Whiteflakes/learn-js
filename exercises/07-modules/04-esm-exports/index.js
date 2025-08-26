const { pathToFileURL } = require('url');

async function inspectEsm(filePath) {
  const url = pathToFileURL(filePath).href;
  const mod = await import(url);
  return { hasDefault: Object.prototype.hasOwnProperty.call(mod, 'default'), keys: Object.keys(mod) };
}

module.exports = { inspectEsm };
