'use strict'

module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended'
  ],
  plugins: [
    'import'
  ],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-unresolved': 'off',
    'import/no-unassigned-import': 'off',
    semi: [
      'warn',
      'never'
    ],
  }
}
