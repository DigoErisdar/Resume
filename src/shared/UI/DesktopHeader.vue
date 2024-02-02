<template>
    <header class="header">
        <BaseNavigation :urls="urls" class="header-navigation" />
    </header>
</template>

<script setup lang="ts">
    import BaseNavigation from '@/widgets/BaseNavigation.vue'
    import { Url } from '@/shared/types/navigation.ts'

    interface Props {
        urls: Url[]
    }

    defineProps<Props>()
</script>

<style scoped lang="scss">
    .header {
        display: grid;
        grid-template-columns: 1fr;
        border-bottom: 1px solid var(--color-line);
        min-height: 56px;

        &-navigation {
            &:deep(.link) {
                display: flex;
                align-items: center;
                justify-content: center;
                padding-left: 32px;
                padding-right: 32px;
                border-bottom: 3px solid transparent;
            }

            &:deep(.active),
            &:deep(:hover) {
                border-bottom-color: var(--accent-orange);
            }
        }
    }
</style>