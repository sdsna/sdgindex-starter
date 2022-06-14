module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "next/core-web-vitals",
    "prettier",
    "plugin:cypress/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "cypress", "jest", "no-only-tests"],
  rules: { "no-only-tests/no-only-tests": "error" },
  overrides: [
    {
      files: ["tests/**/*.test.js"],
      extends: ["plugin:jest/recommended", "plugin:jest/style"],
    },
    {
      files: ["cypress/**/*.spec.js"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
};
