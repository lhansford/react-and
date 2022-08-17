/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  rootDir: './../src',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      // ts-jest configuration goes here
      tsconfig: {
        jsx: 'react',
      },
    },
  },
};
