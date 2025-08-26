const { parentPort } = require('worker_threads');

parentPort.on('message', (n) => {
  // simulate long running task when n > 1000
  if (n > 1000) {
    // never respond
    return;
  }
  parentPort.postMessage(n * 2);
});
