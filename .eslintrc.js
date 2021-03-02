const path = require('path');

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
    'no-unused-expressions': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
  },
};
