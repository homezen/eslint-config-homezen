'use strict'

/*
    ES6+ config
*/
module.exports = {
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            impliedStrict: true,
            experimentalObjectRestSpread: true,
        },
    },
    rules: {
        'no-var': 2,
        'prefer-const': 2,
        'prefer-spread': 2,
        strict: [2, 'never'],
    },
}
