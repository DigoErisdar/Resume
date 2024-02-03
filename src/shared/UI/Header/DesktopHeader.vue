<template>
    <header class="header">
        <div class="header-name">{{ name }}</div>
        <BaseNavigation :urls="urls" class="header-navigation" />
    </header>
</template>

<script setup lang="ts">
    import BaseNavigation from '@/widgets/BaseNavigation.vue'
    import { Url } from '@/shared/types/navigation.ts'

    interface Props {
        urls: Url[]
        name: string
    }

    defineProps<Props>()
</script>

<style scoped lang="scss">
    .header {
        display: flex;
        border-bottom: 1px solid var(--color-line);
        height: 100%;

        &-name {
            flex-shrink: 0;
            max-width: var(--aside-width);
            width: 100%;
            display: flex;
            align-items: center;
            padding: var(--padding);
        }

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