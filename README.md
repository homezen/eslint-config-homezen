# eslint-config-homezen

[![CircleCI](https://circleci.com/gh/homezen/eslint-config-homezen.svg?style=svg)](https://circleci.com/gh/homezen/eslint-config-homezen)

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
