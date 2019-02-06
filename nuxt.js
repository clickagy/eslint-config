'use strict'

module.exports = {
  extends: [
    "./vue.js",
  ],
  rules: {
    // Allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
  }
}
