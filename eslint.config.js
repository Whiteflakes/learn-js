// Flat ESLint config migrated from legacy .eslintrc.json
const js = require('@eslint/js');

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'coverage/**',
      // Ignore all educational exercise sources (large volume, intentionally permissive style)
      'exercises/**'
    ]
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs'
    },
    rules: {
      'no-unused-vars': 'off',
      'no-console': 'off'
    }
  },
  {
    files: [
      'integration/**',
      'scripts/**'
    ],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly'
      }
    }
  }
];
