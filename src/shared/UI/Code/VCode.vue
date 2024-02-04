<template>
    <highlightjs :code="value" class="code" />
</template>

<script setup lang="ts">
    //TODO: Поставить highlight без vue-plugin
    import 'highlight.js/lib/common'

    interface Props {
        value: string
        language?: 'js' | 'python'
    }

    defineProps<Props>()
</script>

<style lang="scss">
    pre.code {
        .hljs {
            overflow: hidden;
            line-height: 1.5;
            padding: 0;
            background: none;
        }

        .hljs,
        .hljs-params,
        .hljs-property {
            color: var(--secondary-white);
        }

        .hljs-type {
            color: var(--secondary-blue);
        }

        .hljs-string,
        .hljs-regexp,
        .hljs-symbol,
        .hljs-variable,
        .hljs-template-variable,
        .hljs-link,
        .hljs-keyword,
        .hljs-selector-attr {
            color: var(--accent-orange);
        }

        .hljs-title {
            color: var(--secondary-blue);
        }

        .hljs-built_in,
        .hljs-literal {
            color: var(--accent-green);
        }
    }
</style>