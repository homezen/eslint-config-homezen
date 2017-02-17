'use strict'

/*
    ES Modules config
*/
module.exports = {
    plugins: ['import'],
    extends: [
        'homezen/es-next',
        'plugin:import/errors',
    ],
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        'import/extensions': [2,
            'never',
            {
                json: 'always',
                css: 'always',
            },
        ],
        'import/newline-after-import': 2,
        'import/no-absolute-path': 2,
        'import/no-duplicates': 2,
        'import/no-mutable-exports': 2,
        'import/order': 2,
        'import/unambiguous': 2,
    },
}
