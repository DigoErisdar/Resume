<template>
    <pre class="code">
      <code v-html="code" class="hljs" :class="props.language"/>
    </pre>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import hljs from 'highlight.js'
    import { Language } from '@/shared/UI/Code/Code.ts'

    interface Props {
        value: string
        language?: Language
    }

    const props = withDefaults(defineProps<Props>(), { language: Language.js })
    const code = computed(() => hljs.highlight(props.value, { language: props.language }).value)
</script>

<style lang="scss">
    pre.code {
        box-sizing: border-box;
        border: 1px solid rgb(30, 45, 61);
        border-radius: 15px;
        background: rgb(1, 18, 33);
        width: 100%;
        padding: 15px 0;

        .hljs {
            overflow: hidden;
            line-height: 1.5;
            padding: 0;
            background: none;
            font-size: var(--fs-code);

            * {
                font-size: inherit;
            }
        }

        .hljs,
        .hljs-params,
        .hljs-attr,
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