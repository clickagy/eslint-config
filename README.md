# [ESlint](https://eslint.org/) config

[![npm (scoped with tag)](https://flat.badgen.net/npm/v/@clickagy/eslint-config)](https://npmjs.com/package/@clickagy/eslint-config)
[![npm](https://flat.badgen.net/npm/dt/@clickagy/eslint-config)](https://npmjs.com/package/@clickagy/eslint-config)

# Table of Contents
   * [Installation](#installation)
   * [Create an .eslintrc file](#create-an-eslintrc-file)
      * [For simple babel projects](#for-simple-babel-projects)
      * [For Vue projects](#for-vue-projects)
      * [For Nuxt projects](#for-nuxt-projects)
   * [Add lint and lintfix scripts to your package.json](#add-lint-and-lintfix-scripts-to-your-packagejson)

## Installation

Add this package and its peerDependencies to your devDependencies
```bash
npm i -D @clickagy/eslint-config eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard
```

Optionally, if using on a [Vue](https://vuejs.org/) or [Nuxt](https://nuxtjs.org/) project, also install `eslint-plugin-vue`
```bash
npm i -D eslint-plugin-vue
```

_______________________________

## Create an `.eslintrc` file
#### For simple babel projects
```json
{
  "root": true,
  "extends": ["@clickagy/eslint-config"]
}
```
#### For Vue projects
```json
{
  "root": true,
  "extends": ["@clickagy/eslint-config/vue"]
}
```
#### For Nuxt projects
```json
{
  "root": true,
  "extends": ["@clickagy/eslint-config/nuxt"]
}
```

_______________________________

## Add lint and lintfix scripts to your package.json
```json
"scripts": {
  "lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
  "lintfix": "eslint --fix --ext .js,.vue --ignore-path .gitignore ."
}
```
