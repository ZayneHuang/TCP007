const { strictEslint } = require('@umijs/fabric');
strictEslint.rules = {
  ...strictEslint.rules,
  '@typescript-eslint/no-explicit-any': 0,
  'no-console': 0,
  quotes: 0,
  'quote-props': 0,
  'import/order': 0,
  'max-len': 0,
};
module.exports = {
  ...strictEslint,
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
};
