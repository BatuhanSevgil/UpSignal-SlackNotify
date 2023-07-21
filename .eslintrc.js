module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "plugin:jest/style", "prettier"],
  plugins: ["jest", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "prettier/prettier": "error",
    "no-underscore-dangle": "off",
    "guard-for-in": "off",
    "no-restricted-syntax": "off",
  },
  settings: {
    jest: {
      version: 26,
    },
  },
};
