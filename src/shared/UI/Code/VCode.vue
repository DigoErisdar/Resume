<template>
    <pre class="code">
      <code v-html="code" class="hljs" :class="props.language"/>
    </pre>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import hljs from 'highlight.js'

    interface Props {
        value: string
        language: 'js' | 'python'
    }

    const props = defineProps<Props>()
    const code = computed(() => hljs.highlight(props.value, { language: props.language }).value)
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

        .hljs-type,
        .hljs-keyword {
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