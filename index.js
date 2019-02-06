'use strict'

module.exports = {
  parser: 'babel-eslint',
  "parserOptions": {
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "plugins": [
    "import"
  ],
  "rules": {
    "generator-star-spacing": "off",
    "no-debugger": "error",
    "import/no-unresolved": "off",
    "import/no-unassigned-import": "off",
    "semi": [
      "warn",
      "never"
    ],
    "no-console": "off"
  }
}
