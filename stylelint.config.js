module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-idiomatic-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-prettier', 'stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'scss/at-rule-no-unknown': true,
    'selector-pseudo-class-no-unknown': null,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['content-visibility', 'contain-intrinsic-size'],
        ignoreSelectors: [':export'],
      },
    ],
  },
};
