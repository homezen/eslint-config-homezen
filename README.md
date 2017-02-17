# eslint-config-homezen

[![CircleCI](https://circleci.com/gh/homezen/eslint-config-homezen.svg?style=shield)](https://circleci.com/gh/homezen/eslint-config-homezen)
[![Greenkeeper badge](https://badges.greenkeeper.io/homezen/eslint-config-homezen.svg)](https://greenkeeper.io/)

eslint configs used by homezen

Abuses npm v3 flat node_modules until <https://github.com/eslint/eslint/issues/3458> is resolved

## Use

```js
extends: [
    'homezen',
    'homezen/node',
    'homezen/es-next',
    'homezen/es-modules',
    'homezen/react',
    'homezen/lodash',
]
```
