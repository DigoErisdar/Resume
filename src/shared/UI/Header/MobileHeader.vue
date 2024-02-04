<template>
    <header class="header">
        <div class="header-top">
            <span>{{ name }}</span>
            <VHamburger v-model="isOpenMenu" class="header-hamburger" />
        </div>
        <div class="header-navigation" :class="{ close: !isOpenMenu }">
            <VNavigation :urls="urls" is-column @click="isOpenMenu = false" />
        </div>
    </header>
</template>

<script setup lang="ts">
    import VNavigation from '@/widgets/VNavigation.vue'
    import { Url } from '@/shared/types/navigation.ts'
    import { ref } from 'vue'
    import VHamburger from '@/features/VHamburger.vue'

    const isOpenMenu = ref(false)
    defineProps<{ urls: Url[]; name: string }>()
</script>

<style scoped lang="scss">
    .header {
        &-navigation {
            height: calc(100% - var(--height-header));
            position: absolute;
            left: 0;
            right: 0;
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
            justify-content: space-between;
        }

        &-hamburger {
            width: 25px;
            height: 100%;
        }
    }
</style>