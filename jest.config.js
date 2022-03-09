/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./src/jest.setup.ts"],
  collectCoverageFrom: [
    "./src/**/*.tsx",
    "!./src/**/main.tsx",
    "!src/stories/**",
  ],
};
