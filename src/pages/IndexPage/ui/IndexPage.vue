<template>
    <section class="index">
        <div class="index-info">
            <div class="index-info__subtitle">
                Hi all. I Am
            </div>
            <h1 class="index-info__title">
                Daniil Galkin
            </h1>
            <h2 class="index-info__post">
                > Frontend Developer
            </h2>
            <VCode
                language="JavaScript"
                class="index-info-code"
                :value="code"
            >
            </VCode>
        </div>
        <div class="index-game"></div>
    </section>
</template>

<script setup lang="ts">
    import VCode from '@/shared/UI/Code/VCode.vue'
    import { ref } from 'vue'

    const code = ref(`//link game
const githubPage = "https://github.com/DigoErisdar/Tetris3";`)
</script>

<style scoped lang="scss">
    .index {
        display: flex;
        align-items: center;
        height: 100%;
        gap: 55px;

        &-info {
            &__subtitle {
                color: var(--light-color);
                margin-bottom: 15px;
            }

            &__title {
                color: var(--light-color);
            }

            &__post {
                color: var(--secondary-blue);
            }

            &-code {
                margin-top: 80px;
                display: flex;
                flex-direction: column;
                row-gap: 10px;
            }
        }

        &-game {
            width: 550px;
            height: 475px;
            background: red;
        }
    }
</style>