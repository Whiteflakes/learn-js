const fs = require('fs');
const path = require('path');

function runTests(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) runTests(full);
    if (ent.isFile() && ent.name === 'test.js') {
      try {
        require(full);
      } catch (err) {
        console.error('Test failed:', full);
        console.error(err.stack || err);
        try {
          const hintPath = path.join(path.dirname(full), 'hint.txt');
          if (fs.existsSync(hintPath)) {
            console.error('\n--- Interactive hint ---');
            console.error(fs.readFileSync(hintPath, 'utf8'));
            console.error('--- End hint ---\n');
          }
        } catch (readErr) {
          // ignore hint read errors
        }
        process.exitCode = 1;
      }
    }
  }
}

const exercisesDir = path.join(__dirname, '');
runTests(exercisesDir);

if (process.exitCode === 1) {
  console.error('\nSome tests failed.');
  process.exit(1);
} else {
  console.log('\nAll tests passed.');
}
