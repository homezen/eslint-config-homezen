'use strict'

/*
    CSS Modules config
*/
module.exports = {
    plugins: ['css-modules'],
    rules: {
        'css-modules/no-unused-class': [2, {camelCase: true}],
        'css-modules/no-undef-class': [2, {camelCase: true}],
    },
}
