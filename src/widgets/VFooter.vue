<template>
    <footer class="footer">
        <span class="footer-label">find in me:</span>
        <BaseNavigation :urls="urls" />
    </footer>
</template>

<script setup lang="ts">
    import BaseNavigation from '@/widgets/VNavigation.vue'
    import { shallowRef } from 'vue'
    import { Url } from '@/shared/types/navigation.ts'

    const urls = shallowRef<Url[]>([
        { label: 'Tg', src: 'https://t.me/DigoErisdar', target: '_blank' },
        {
            label: 'hh',
            src: 'https://hh.ru/resume/d7627bb3ff0be970ab0039ed1f6d4d48794162',
            target: '_blank'
        },
        {
            label: 'GitHub',
            src: 'https://github.com/DigoErisdar',
            target: '_blank',
            classes: ['right']
        }
    ])
</script>

<style scoped lang="scss">
    .footer {
        display: flex;
        border-top: 1px solid var(--color-line);
        align-items: center;
        @include font(var(--fs-label), var(--secondary));
        height: 100%;

        &-label {
            flex-shrink: 0;
            padding: var(--padding);
        }

        &:deep(.link) {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 16px;
        }

        &:deep(.right) {
            margin-left: auto;
        }
    }
</style>