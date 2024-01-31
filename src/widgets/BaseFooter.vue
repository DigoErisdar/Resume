<template>
    <footer class="footer">
        <span class="footer-label">find in me:</span>
        <BaseNavigation :urls="urls">
            <template #default="{ item }">
                <VLink
                    v-bind="item"
                    class="footer-link"
                    :class="item.classes"
                />
            </template>
        </BaseNavigation>
    </footer>
</template>

<script setup lang="ts">
    import BaseNavigation from '@/widgets/BaseNavigation.vue'
    import { shallowRef } from 'vue'
    import VLink from '@/shared/UI/Link/VLink.vue'
    import { Url } from '@/shared/types/navigation.ts'

    const urls = shallowRef<Url[]>([
        { label: 'tg', src: 'https://t.me/DigoErisdar', target: '_blank' },
        {
            label: '@DigoErisdar',
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
        font-size: var(--fs-label);
        color: var(--secondary);
        height: 100%;

        &-label {
            flex-shrink: 0;
            padding: var(--padding);
        }

        &-link {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 16px;
        }
    }
</style>