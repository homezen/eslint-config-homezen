'use strict'

/*
    ES6+ config
*/
module.exports = {
    plugins: ['flowtype'],
    extends: ['plugin:flowtype/recommended'],
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },
}
