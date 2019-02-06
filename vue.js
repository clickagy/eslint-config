'use strict'

module.exports = {
  "extends": [
    "./index.js",
    "plugin:vue/recommended"
  ],
  "plugins": [
    "vue"
  ],
  "rules": {
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
