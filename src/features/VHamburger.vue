<template>
    <div class="hamburger-container" @click="isActive = !isActive">
        <div class="hamburger" :class="{ active: isActive }">
            <div class="hamburger-line top"></div>
            <div class="hamburger-line center"></div>
            <div class="hamburger-line bottom"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const isActive = defineModel<boolean>()
</script>

<style scoped lang="scss">
    .hamburger {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        $hamburger: &;
        --weight: 2px;
        --color: var(--secondary);

        &.active {
            #{$hamburger}-line {
                transition: 0.3s;

                &.center {
                    opacity: 0;
                }

                &.top {
                    top: calc(50% - var(--weight) / 2);
                    transform: rotate(-45deg);
                }

                &.bottom {
                    bottom: calc(50% - var(--weight) / 2);
                    transform: rotate(45deg);
                }
            }
        }

        &-line {
            transition: 0.3s;
            height: var(--weight);
            background: var(--color);
            flex-grow: 1;

            &.top,
            &.bottom {
                position: absolute;
                left: 0;
                right: 0;
            }

            &.top {
                top: var(--weight);
            }

            &.bottom {
                bottom: var(--weight);
            }
        }
    }
</style>
