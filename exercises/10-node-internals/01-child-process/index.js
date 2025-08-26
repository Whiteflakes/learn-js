const { spawnSync } = require('child_process');
function runEcho(msg) {
  const out = spawnSync('node', ['-e', `console.log(${JSON.stringify(msg)})`], { encoding: 'utf8' });
  return { status: out.status, stdout: out.stdout };
}
module.exports = { runEcho };
