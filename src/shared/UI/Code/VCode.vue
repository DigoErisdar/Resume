<template>
    <highlightjs
        :code="value"
        class="code"
    />
</template>

<script setup lang="ts">
    import 'highlight.js/lib/common'

    interface Props {
        value: string
    }

    defineProps<Props>()
</script>

<style lang="scss">
    pre.code {
        code.hljs {
            padding: 0;
            background: none;
            color: var(--secondary-white);
            overflow: hidden;
            line-height: 1.5;
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
        .hljs-selector-attr {
            color: var(--accent-orange);
        }
    }
</style>