const fs = require('fs');
const config = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, 'utf-8'));

module.exports = {
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/lib/'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', {...config /* custom configuration in Jest */}],
  },
};
