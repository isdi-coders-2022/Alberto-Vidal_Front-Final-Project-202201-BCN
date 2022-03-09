/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./src/jest.setup.ts"],
  collectCoverageFrom: [
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "!./src/**/main.tsx",
    "!src/stories/**",
    "!src/**/vite-env.d.ts",
  ],
};
