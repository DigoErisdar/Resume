<template>
    <section class="index">
        <div class="index-info">
            <div class="index-info__subtitle">Hi all. I Am</div>
            <h1 class="index-info__title">Daniil Galkin</h1>
            <h2 class="index-info__post">> Frontend Developer</h2>
            <VCode language="JavaScript" class="index-info-code" :value="code"></VCode>
        </div>
        <div class="index-game">
            <VGame />
        </div>
    </section>
</template>

<script setup lang="ts">
    import VCode from '@/shared/UI/Code/VCode.vue'
    import { ref } from 'vue'
    import VGame from '@/shared/libs/Tetris/components/VGame.vue'

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
            border-radius: 8px;
            border: 1px solid #0c1616;
            background: linear-gradient(
                150deg,
                rgba(23, 85, 83, 0.7) 1.7%,
                rgba(67, 217, 173, 0.09) 81.82%
            );
            box-shadow: 0 2px 0 0 rgba(255, 255, 255, 0.3) inset;
            backdrop-filter: blur(32px);
            padding: calc(var(--padding) * 2);
        }
    }
</style>