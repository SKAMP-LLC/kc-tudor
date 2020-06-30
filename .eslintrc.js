module.exports = {
  env: {
    browser: true,
    es2020: true,
    jquery: true,
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
  }
};
