module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'prettier/prettier': ['error', { singleQuote: true, semi: true }],
  },
  env: {
    node: true,
    es2021: true,
  },
};
