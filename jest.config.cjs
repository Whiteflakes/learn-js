module.exports = {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/exercises/**/jest-*.test.js'],
  collectCoverage: false,
  restoreMocks: true,
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
};
