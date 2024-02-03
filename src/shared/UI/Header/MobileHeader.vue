<template>
    <header class="header">
        <div class="header-top" @click="isOpenMenu = !isOpenMenu">{{ name }}</div>
        <div class="header-navigation" :class="{ close: !isOpenMenu }">
            <BaseNavigation :urls="urls" is-column @click="isOpenMenu = false" />
        </div>
    </header>
</template>

<script setup lang="ts">
    import BaseNavigation from '@/widgets/BaseNavigation.vue'
    import { Url } from '@/shared/types/navigation.ts'
    import { ref } from 'vue'

    const isOpenMenu = ref(false)
    defineProps<{ urls: Url[]; name: string }>()
</script>

<style scoped lang="scss">
    .header {
        &-navigation {
            width: 100%;
            height: calc(100% - var(--height-header));
            position: absolute;
            z-index: 1000;
            background: var(--primary-bg);
            transition: 0.5s;
            transform: translateX(0);

            &.close {
                transform: translateX(-100%);
            }
        }

        &-top {
            height: var(--height-header);
            display: flex;
            align-items: center;
            padding: var(--padding);
            border-bottom: 1px solid var(--color-line);
        }
    }
</style>