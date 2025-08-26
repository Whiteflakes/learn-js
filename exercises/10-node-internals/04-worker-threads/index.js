const { Worker } = require('worker_threads');
const path = require('path');

function runFactorial(n) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.resolve(__dirname, 'worker.js'));
    worker.postMessage(n);
    worker.once('message', (v)=> { resolve(v); worker.terminate(); });
    worker.once('error', reject);
  });
}
module.exports = { runFactorial };
