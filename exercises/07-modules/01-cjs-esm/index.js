const { pathToFileURL } = require('url');
const path = require('path');

async function loadModule(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  // If file is explicitly .mjs/.mts, use dynamic import to load as ESM
  if (ext === '.mjs' || ext === '.mts') {
    const url = pathToFileURL(filePath).href;
    const mod = await import(url);
    return { type: 'esm', mod };
  }

  // Otherwise prefer CommonJS require, but fall back to dynamic import on failure
  try {
    const mod = require(filePath);
    return { type: 'cjs', mod };
  } catch (e) {
    const url = pathToFileURL(filePath).href;
    const mod = await import(url);
    return { type: 'esm', mod };
  }
}

module.exports = { loadModule };
