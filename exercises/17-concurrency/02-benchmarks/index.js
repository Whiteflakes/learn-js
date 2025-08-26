// Simple benchmark harness comparing naive loop vs setImmediate chunking
function runBench(taskSize, chunk) {
  const results = {};
  // naive
  let s = Date.now();
  let sum = 0;
  for (let i = 0; i < taskSize; i++) sum += i;
  results.naive = Date.now() - s;

  // chunked via setImmediate simulation (synchronous fallback)
  s = Date.now();
  sum = 0;
  let i = 0;
  while (i < taskSize) {
    const end = Math.min(i + chunk, taskSize);
    for (; i < end; i++) sum += i;
  }
  results.chunked = Date.now() - s;
  return results;
}

module.exports = { runBench };
