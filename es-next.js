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
        'comma-dangle': [2, {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],
        'no-var': 2,
        'prefer-const': 2,
        'prefer-spread': 2,
        'require-await': 2,
        strict: [2, 'never'],
    },
}
