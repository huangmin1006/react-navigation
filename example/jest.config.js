module.exports = {
  testRegex: '/__integration_tests__/.*\\.(test|spec)\\.(js|tsx?)$',
  globalSetup: './e2e/config/setup.tsx',
  globalTeardown: './e2e/config/teardown.tsx',
};
