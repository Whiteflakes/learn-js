const { parentPort } = require('worker_threads');

// simple factorial implementation (synchronous)
function factorial(n) {
  if (n < 0) return null;
  if (n === 0 || n === 1) return 1;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

parentPort.on('message', (n) => {
  try {
    const result = factorial(n);
    parentPort.postMessage(result);
  } catch (err) {
    parentPort.postMessage({ error: String(err) });
  }
});
