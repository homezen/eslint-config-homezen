'use strict'

module.exports = {
    plugins: [
        'react',
    ],
    extends: [
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {jsx: true},
    },
    rules: {
        'jsx-quotes': [2, 'prefer-single'],
        'react/display-name': [2, {ignoreTranspilerName: false}],
        'react/jsx-boolean-value': 2,
        'react/jsx-closing-bracket-location': [
            2,
            {
                selfClosing: 'after-props',
                nonEmpty: 'tag-aligned',
            },
        ],
        'react/jsx-curly-spacing': 2,
        'react/jsx-handler-names': 2,
        'react/jsx-indent': 2,
        'react/jsx-indent-props': 2,
        'react/jsx-key': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-uses-react': 2,
        'react/jsx-no-bind': [2, {ignoreRefs: true}],
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-literals': 2,
        'react/jsx-no-undef': 2,
        'react/jsx-pascal-case': 2,
        'react/jsx-wrap-multilines': 2,
        'react/no-danger': 2,
        'react/no-deprecated': 2,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-direct-mutation-state': 2,
        'react/no-is-mounted': 2,
        'react/no-set-state': 2,
        'react/no-unknown-property': 2,
        'react/prop-types': 2,
        'react/self-closing-comp': 2,
        'react/sort-comp': 2,
        'react/sort-prop-types': [
            2,
            {
                callbacksLast: true,
                requiredFirst: true,
            },
        ],
    },
}
