module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "consistent-return": 2,
    "indent": [4, 4],
    "no-else-return": 1,
    "semi": [1, "always"],
    "space-unary-ops": 2
  },
};