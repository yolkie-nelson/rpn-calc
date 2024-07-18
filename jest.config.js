module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.ts', '**/?(*.)+(spec|test).ts'],
    moduleDirectories: ['node_modules', 'src'],
  };
