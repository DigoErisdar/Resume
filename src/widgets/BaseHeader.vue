<template>
    <header class="header">
        <div class="header-logo">
            Digo Eisdar
        </div>
        <BaseNavigation :urls="urls">
            <template #default="{ item }">
                <VLink
                    v-bind="item"
                    class="link"
                />
            </template>
        </BaseNavigation>
    </header>
</template>

<script setup lang="ts">
    import BaseNavigation from '@/widgets/BaseNavigation.vue'
    import { shallowRef } from 'vue'
    import VLink from '@/shared/UI/Link/VLink.vue'

    const urls = shallowRef([
        { src: '/', label: '_hello' },
        { src: '/about', label: '_about' }
    ])
</script>

<style scoped lang="scss">
    .header {
        display: grid;
        grid-template-columns: minmax(auto, 300px) 1fr;
        border-bottom: 1px solid var(--color-line);

        .link {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 32px;
            padding-right: 32px;
            border-bottom: 3px solid transparent;

            &.active,
            &:hover {
                border-bottom-color: var(--accent-orange);
            }
        }

        &-logo {
            color: var(--secondary);
            font-size: var(--fs-label);
            padding: var(--padding);
            display: flex;
            align-items: center;
        }
    }
</style>