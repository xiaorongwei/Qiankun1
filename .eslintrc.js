module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    rules: {
        'vue/max-attributes-per-line': 'off',
        'vue/html-self-closing': 'off',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: false
            }
        ]
    }
}