'use strict';

const fs = require('fs');
const path = require('path');

const baseConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '.eslintrc')))

module.exports = {
  ...baseConfig,
  "extends": [
    ...baseConfig.extends,
    "plugin:vue/recommended"
  ],
  "plugins": [
    ...baseConfig.plugins,
    "vue"
  ],
  "rules": {
    ...baseConfig.rules,
    "vue/no-v-html": "off",
    "vue/max-attributes-per-line": [
      2,
      {
        "singleline": 2,
        "multiline": {
          "max": 1,
          "allowFirstLine": false
        }
      }
    ],
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      {
        "ignores": []
      }
    ],
    "vue/html-indent": [
      "error",
      2,
      {
        "attribute": 1,
        "baseIndent": 0,
        "closeBracket": 0,
        "alignAttributesVertically": true,
        "ignores": []
      }
    ]
  }
}
