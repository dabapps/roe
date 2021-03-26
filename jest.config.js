module.exports = {
  preset: 'ts-jest',
  testURL: 'http://localhost/',
  collectCoverageFrom: ['src/ts/**/*.(js|jsx|ts|tsx)'],
  setupFiles: ['<rootDir>/tests/helpers/setup.ts'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testRegex: 'tests/.+\\.(ts|tsx|js|jsx)$',
  testPathIgnorePatterns: [
    '<rootDir>/tests/__mocks__/',
    '<rootDir>/tests/helpers/',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
