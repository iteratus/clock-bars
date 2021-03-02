module.exports = {
  extends: [
    'airbnb-base',
  ],
  env: {
    browser: true,
    es6: true,
  },
  plugins: [
    'import',
  ],
  rules: {
    'no-param-reassign': 0,
    'no-unused-expressions': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
  },
};
