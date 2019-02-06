# [ESlint](https://eslint.org/) config

[![npm (scoped with tag)](https://flat.badgen.net/npm/v/@clickagy/eslint-config)](https://npmjs.com/package/@clickagy/eslint-config)
[![npm](https://flat.badgen.net/npm/dt/@clickagy/eslint-config)](https://npmjs.com/package/@clickagy/eslint-config)


## Usage

1. Add this package to your devDependencies

```bash
$ npm i --save-dev @clickagy/eslint-config
```

2. Create a `.eslintrc` file
```json
{
  "root": true,
  "extends": []
}
```

3. Add the [`peerDependencies`](./package.json) to your project // TODO

* Nuxt OR Vue project
```bash
$ npm i --save-dev ... // TODO
```
* Other JS project
```bash
$ npm i --save-dev ... // TODO
```
4. Extend our config:
* Nuxt project
```json
  "extends": [
    "@clickagy"
  ]
```

* Vue project
```json
  "extends": [
    "@clickagy/eslint-config/vue"
  ]
```

* JS project
```json
  "extends": [
    "@clickagy/eslint-config/base"
  ]
```
