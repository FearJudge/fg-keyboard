/** @type {import('ts-jest').JestConfigWithTsJest} **/

export default {
  testEnvironment: "node",
  rootDir: "./",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  roots: [
    "<rootDir>/src"
  ],
  modulePaths: [
    "<rootDir>/src/",
    "<rootDir>/../"
  ],
  moduleDirectories: [
    "node_modules", "src"
  ] 
};