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
    .code {
        code.hljs {
            padding: 0;
            background: none;
            color: var(--secondary-white);
            overflow: hidden;
            line-height: 1.5;
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
        .hljs-selector-attr {
            color: var(--accent-orange);
        }
    }
</style>