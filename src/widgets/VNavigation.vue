<template>
    <nav class="navigation" :class="[{ isColumn }]">
        <ul>
            <li v-for="(url, index) in urls" :key="url.src" :class="url.classes">
                <slot :item="url" :index="index">
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
        isColumn?: boolean
    }

    defineProps<Props>()
</script>

<style scoped lang="scss">
    nav {
        width: 100%;
        height: 100%;
        overflow: hidden;

        &.isColumn {
            ul {
                flex-direction: column;
                height: auto;
                max-height: 100%;

                li {
                    width: 100%;
                    border-left: none;
                    border-right: none;
                    border-bottom: 1px solid var(--color-line);
                    min-height: 55px;

                    a {
                        flex-grow: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: auto;
                        max-height: fit-content;
                    }
                }
            }
        }
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
            flex-shrink: 0;

            &:first-child {
                border-left: 1px solid var(--color-line);
            }
        }
    }
</style>