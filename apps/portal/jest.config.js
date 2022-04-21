const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/src/testing/setup.ts'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@public/(.*)': '<rootDir>/public/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  snapshotSerializers: ['@emotion/jest/serializer'],
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
