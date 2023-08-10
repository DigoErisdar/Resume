/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-strongly-recommended',
        '@vue/typescript/recommended',
    ],
    ignorePatterns: ['dist/**/*'],
    overrides: [
        {
            files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
            extends: ['plugin:cypress/recommended']
        }
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    rules: {
        "vue/html-self-closing": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "vue/multiline-html-element-content-newline": ["warn", {
            "ignoreWhenEmpty": true,
            "allowEmptyLines": false
        }],
        "vue/singleline-html-element-content-newline": ["warn", {
            "ignoreWhenNoAttributes": true,
            "ignoreWhenEmpty": true,
        }],
        'vue/no-multiple-template-root': 'off',


        'no-unused-vars': 'off',
        'vue/no-unused-vars': 'error',
        // "@typescript-eslint/no-unused-vars": "off",
        'vue/html-indent': ['error', 4], // https://eslint.vuejs.org/rules/html-indent.html#vue-html-indent
        'vue/script-indent': ['error', 4, { baseIndent: 1 }], // https://eslint.vuejs.org/rules/script-indent.html#vue-script-indent
        'vue/require-typed-ref': 'error', // https://eslint.vuejs.org/rules/require-typed-ref.html#rule-details
        'vue/no-static-inline-styles': [
            'error',
            {
                // https://eslint.vuejs.org/rules/no-static-inline-styles.html#vue-no-static-inline-styles
                allowBinding: false
            }
        ],
        'vue/define-emits-declaration': ['error', 'type-based'], // "runtime" // https://eslint.vuejs.org/rules/define-emits-declaration.html
        'vue/define-props-declaration': ['error', 'type-based'], // "runtime" // https://eslint.vuejs.org/rules/define-props-declaration.html
        'vue/valid-define-props': 'error', // https://eslint.vuejs.org/rules/valid-define-props.html
        'vue/object-curly-spacing': ['error', 'always'], // https://eslint.vuejs.org/rules/object-curly-spacing.html#vue-object-curly-spacing

        'vue/no-multi-spaces': 'warn', //https://eslint.vuejs.org/rules/no-multi-spaces.html#vue-no-multi-spaces
        'vue/mustache-interpolation-spacing': 'warn', // https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html

        'vue/max-len': [
            'warn',
            {
                ignoreComments: true,
                code: 125
            }
        ], // https://eslint.vuejs.org/rules/max-len.html#vue-max-len
        'vue/block-lang': [
            'error',
            {
                script: {
                    lang: 'ts'
                }
            }
        ], // https://eslint.vuejs.org/rules/block-lang.html
        'vue/block-tag-newline': 'error', // https://eslint.vuejs.org/rules/block-tag-newline.html
        'vue/custom-event-name-casing': 'error', // https://eslint.vuejs.org/rules/custom-event-name-casing.html
        'vue/define-macros-order': 'warn', // https://eslint.vuejs.org/rules/define-macros-order.html
        'vue/html-button-has-type': 'warn', // https://eslint.vuejs.org/rules/html-button-has-type.html

        'vue/html-comment-content-newline': 'warn', // https://eslint.vuejs.org/rules/html-button-has-type.html
        'vue/html-comment-content-spacing': 'warn', // https://eslint.vuejs.org/rules/html-comment-content-spacing.html
        'vue/html-comment-indent': 'warn', // https://eslint.vuejs.org/rules/html-comment-indent.html

        'vue/new-line-between-multi-line-property': 'warn', // ??? https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html

        'vue/next-tick-style': 'error', // https://eslint.vuejs.org/rules/next-tick-style.html

        // "vue/no-empty-component-block": "warn", // https://eslint.vuejs.org/rules/no-empty-component-block.html
        'vue/no-root-v-if': 'warn', // https://eslint.vuejs.org/rules/no-root-v-if.html

        'vue/no-template-target-blank': 'error', // https://eslint.vuejs.org/rules/no-template-target-blank.html
        'vue/no-this-in-before-route-enter': 'error', // https://eslint.vuejs.org/rules/no-this-in-before-route-enter.html

        'vue/no-undef-components': 'off', // https://eslint.vuejs.org/rules/no-undef-components.html
        'vue/no-undef-properties': 'error', // https://eslint.vuejs.org/rules/no-undef-properties.html
        'vue/no-unused-properties': 'warn', // https://eslint.vuejs.org/rules/no-unused-properties.html
        'vue/no-unused-refs': 'warn', // https://eslint.vuejs.org/rules/no-unused-refs.html

        'vue/no-useless-mustaches': 'warn', // https://eslint.vuejs.org/rules/no-useless-mustaches.html
        'vue/no-useless-v-bind': 'warn', // https://eslint.vuejs.org/rules/no-useless-v-bind.html

        'vue/no-unsupported-features': 'warn', // https://eslint.vuejs.org/rules/no-unsupported-features.html

        "vue/no-v-text": "error", // https://eslint.vuejs.org/rules/no-v-text.html

        'vue/padding-line-between-blocks': 'warn', // https://eslint.vuejs.org/rules/padding-line-between-blocks.html
        'vue/static-class-names-order': 'warn', // https://eslint.vuejs.org/rules/static-class-names-order.html
        'vue/arrow-spacing': 'warn', // https://eslint.vuejs.org/rules/arrow-spacing.html
        'vue/block-spacing': 'error',

        'vue/eqeqeq': 'warn', // https://eslint.vuejs.org/rules/eqeqeq.html#vue-eqeqeq
        eqeqeq: 'warn' // https://eslint.org/docs/latest/rules/eqeqeq
    }
}
