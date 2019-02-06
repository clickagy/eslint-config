'use strict'

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: [
    'import',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-unresolved': 'off',
    'import/no-unassigned-import': 'off',
    // Allow paren-less arrow functions only when there's no braces
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    // Prefer const over let
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false,
    }],
    // No single if in an 'else' block
    'no-lonely-if': 'error',
    // Force curly braces for control flow, including if blocks with a single statement
    curly: ['error', 'all'],
    // Force dot notation when possible
    'dot-notation': 'error',
    'no-var': 'error',
    'comma-dangle': ['error', 'always-multiline'],
  },
}
