const { Worker } = require('worker_threads');
const path = require('path');

function runTask(n, { timeout = 100 } = {}) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.resolve(__dirname, 'task-worker.js'));
    let settled = false;
    let timer = null;
    function cleanup() {
      if (settled) return;
      settled = true;
      try { worker.removeAllListeners('message'); worker.removeAllListeners('error'); } catch (e) {}
      try { if (timer) clearTimeout(timer); } catch (e) {}
    }
    timer = setTimeout(() => {
      // attempt graceful termination
      worker.terminate().then(() => {
        if (!settled) { cleanup(); reject(new Error('terminated')); }
      }).catch((err) => { if (!settled) { cleanup(); reject(err); } });
    }, timeout);
    worker.once('message', (v)=> { if (settled) return; clearTimeout(timer); cleanup(); resolve(v); worker.terminate(); });
    worker.once('error', (e)=> { if (settled) return; clearTimeout(timer); cleanup(); reject(e); });
    worker.postMessage(n);
  });
}

module.exports = { runTask };
