<template>
    <nav class="navigation">
        <ul>
            <li
                v-for="(url, index) in urls"
                :key="url.src"
            >
                <slot
                    :item="url"
                    :index="index"
                >
                    <VLink v-bind="url" />
                </slot>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
    import { Url } from '@/shared/types/navigation.ts'
    import VLink from '@/shared/UI/Link/VLink.vue'

    interface Props {
        urls: Url[]
    }

    defineProps<Props>()
</script>

<style scoped lang="scss">
    nav {
        width: 100%;
        height: 100%;
        overflow: hidden;
        --item-padding: 32px;
    }

    ul {
        display: flex;
        align-items: center;
        height: 100%;
        overflow-x: auto;

        > * {
            height: inherit;
        }

        li {
            border-left: 1px solid var(--color-line);
            border-right: 1px solid var(--color-line);
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--secondary);
            transition: 0.15s;

            .link {
                display: flex;
                height: 100%;
                align-items: center;
                justify-content: center;
                border-bottom: 3px solid transparent;
                transition: 0.15s;

                &.active,
                &:hover {
                    border-bottom-color: var(--accent-orange);
                    transition: 0.3s;

                    .link-label {
                        color: var(--light-color);
                        transition: inherit;
                    }
                }

                &-label {
                    color: var(--secondary);
                    padding-left: var(--item-padding);
                    padding-right: var(--item-padding);
                }
            }

            &:first-child {
                border-left: 1px solid var(--color-line);
            }
        }
    }
</style>