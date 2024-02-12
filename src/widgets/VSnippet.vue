<template>
    <div class="snippet">
        <h3 class="snippet-title" v-if="$slots.title || title">
            <slot name="title">{{ title }}</slot>
        </h3>
        <VCode :value="code" :language="Language.ts" />
        <div class="snippet-comment" v-if="$slots.default()">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Language } from '@/shared/UI/Code/Code.ts'
    import VCode from '@/shared/UI/Code/VCode.vue'

    interface Props {
        title?: string
        code: string
        language?: Language
    }

    defineProps<Props>()
</script>

<style scoped lang="scss">
    .snippet {
        display: flex;
        row-gap: 10px;
        flex-direction: column;

        &-title,
        &-comment {
            color: var(--light-color);
            padding: 0 15px;
            line-height: 1.2;
        }

        &-comment {
            font-size: var(--fs-label);
        }
    }
</style>