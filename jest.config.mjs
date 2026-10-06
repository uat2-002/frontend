export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  injectGlobals: true,
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(png|jpg|jpeg|gif|webp|svg|ico)$': '<rootDir>/src/__mock__/fileMock.ts',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
};
