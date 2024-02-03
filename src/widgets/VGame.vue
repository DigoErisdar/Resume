<template>
    <div class="container">
        <div class="game">
            <VGameStatus :status @change="changeStatus" v-if="status" />
            <TableWidget :matrix="tetris.game.matrix" />
        </div>
        <div>
            <div class="prediction">
                <TableWidget
                    v-for="figure in tetris.figuresSequence.items.value"
                    :matrix="figure?.matrix"
                    style="background: transparent; border: none"
                />
            </div>
            <div class="game-info">
                <p>Очков: {{ tetris.game.score }}</p>
                <p>Управление:</p>
                <p>a - Влево</p>
                <p>d - Вправо</p>
                <p>s - Вниз</p>
                <p>w - Поворот</p>
                <p>p - Пауза</p>
                <p>Пробел - До конца вниз</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import useTetris from '@/shared/libs/Tetris/composables/useTetris.ts'
    import TableWidget from '@/shared/libs/Tetris/components/TableWidget.vue'
    import { computed } from 'vue'
    import { GameStatus } from '@/features/GameStatus.ts'
    import VGameStatus from '@/features/VGameStatus.vue'

    interface GameProps {
        rows?: number
        cols?: number
    }

    const props = withDefaults(defineProps<GameProps>(), {
        rows: 20,
        cols: 10
    })
    const tetris = useTetris(props.cols, props.rows)
    const status = computed((): GameStatus => {
        if (tetris.isFinished.value === null) return GameStatus.ready
        if (tetris.isFinished.value) return GameStatus.end
        if (tetris.isFinished.value === false && tetris.isPause.value) return GameStatus.pause
    })

    function changeStatus(status: GameStatus) {
        console.log('change', status)
        switch (status) {
            case GameStatus.ready:
                tetris.start()
                break
            case GameStatus.pause:
                tetris.pause(false)
                break
            case GameStatus.end:
                tetris.restart()
                tetris.start()
                break
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        display: grid;
        grid-template-columns: 250px auto;
        grid-gap: 15px;
    }

    .game {
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        border-radius: 8px;
        background: rgba(1, 22, 39, 0.84);
        box-shadow: 1px 5px 11px 0 rgba(2, 18, 27, 0.71) inset;
        overflow: hidden;
        position: relative;

        :deep(table) {
            margin-bottom: -2px;
        }

        &-info {
            margin-top: 20px;
            color: var(--secondary-white);
            display: flex;
            gap: 10px;
            flex-direction: column;

            > p {
                @include font(var(--fs-label), var(--secondary-white));
            }
        }
    }

    .prediction {
        border-radius: 8px;
        background: rgba(1, 20, 35, 0.19);
        display: flex;
        gap: 15px;
        height: 100px;
        width: 150px;
        align-items: center;
        justify-content: center;
    }
</style>