'use strict'

module.exports = {
    plugins: [
        'lodash',
        'lodash-fp',
    ],
    extends: [
        'plugin:lodash/recommended',
    ],
    rules: {
        'lodash/import-scope': [2, 'member'],
        'lodash/path-style': [2, 'as-needed'],
        'lodash/prefer-lodash-method': 2,
        'lodash-fp/no-chain': 2,
        'lodash-fp/no-argumentless-calls': 2,
        'lodash-fp/no-extraneous-iteratee-args': 2,
        'lodash-fp/no-single-composition': 2,
        'lodash-fp/no-submodule-destructuring': 2,
        'lodash-fp/prefer-flat-map': 2,
    },
}
