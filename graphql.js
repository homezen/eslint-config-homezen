'use strict'

module.exports = {
    plugins: ['graphql'],
    rules: {
        'graphql/template-strings': [2, {env: 'literal'}],
        'graphql/capitalized-type-name': 2,
        'graphql/named-operations': 2,
    },
}
