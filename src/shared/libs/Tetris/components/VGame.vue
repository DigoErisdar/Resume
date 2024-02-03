<template>
    <div class="container">
        <div :class="style.VGame" class="game">
            <div class="game-status">
                <div
                    v-if="actionOnStatus"
                    class="game-status-text"
                    :class="{ visibility: status && actionOnStatus.message }"
                >
                    {{ actionOnStatus.message }}
                </div>
                <VButton
                    v-if="actionOnStatus"
                    class="game-status-button"
                    :class="{ visibility: status }"
                    v-bind="actionOnStatus.button"
                />
            </div>
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
    import style from '@/shared/libs/Tetris/components/VGame.module.scss'
    import { computed } from 'vue'
    import VButton from '@/shared/UI/Button/VButton.vue'

    interface GameProps {
        rows?: number
        cols?: number
    }

    enum GameStatus {
        ready = 'ready',
        pause = 'pause',
        end = 'end'
    }

    interface IActionOnStatus {
        button: {
            label: string
            onClick: () => void
        }
        message: string | false
    }

    const props = withDefaults(defineProps<GameProps>(), {
        rows: 20,
        cols: 10
    })
    const tetris = useTetris(props.cols, props.rows)
    const status = computed(() => {
        if (tetris.isFinished.value === null) return GameStatus.ready
        if (tetris.isFinished.value) return GameStatus.end
        if (tetris.isFinished.value === false && tetris.isPause.value) return GameStatus.pause
    })
    const actionOnStatus = computed((): IActionOnStatus => {
        switch (status.value) {
            case GameStatus.ready:
                return {
                    button: {
                        label: 'Start',
                        onClick: () => {
                            console.log('start')
                            tetris.start()
                        }
                    },
                    message: false
                }
            case GameStatus.pause:
                return {
                    button: {
                        label: 'Continue',
                        onClick: () => tetris.pause(false)
                    },
                    message: false
                }
            case GameStatus.end:
                return {
                    button: {
                        label: 'Restart',
                        onClick: () => {
                            tetris.restart()
                            tetris.start()
                        }
                    },
                    message: 'Game Over'
                }
        }
    })
    // onMounted(() => tetris.start())
</script>

<style lang="scss" scoped>
    .container {
        display: grid;
        grid-template-columns: 250px auto;
        grid-gap: 15px;
    }

    .game {
        border-radius: 8px;
        background: rgba(1, 22, 39, 0.84);
        box-shadow: 1px 5px 11px 0 rgba(2, 18, 27, 0.71) inset;
        overflow: hidden;
        position: relative;

        :deep(table) {
            margin-bottom: -2px;
        }

        &-status {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 30%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 15px;

            :not(.visibility) {
                opacity: 0;
                display: none;
                transition: 0.3s;
                transition-delay: 0.3s;
            }

            .visibility {
                opacity: 1;
                transition: 0.3s;
            }

            &-text {
                width: 100%;
                min-height: 50px;
                border-radius: 8px;
                box-shadow: inset 1px 5px 11px 0 rgba(2, 18, 27, 0.71);
                background: rgba(1, 22, 39, 0.84);
                display: flex;
                align-items: center;
                justify-content: center;
                @include font(var(--fs-subtitle), var(--secondary-green));
            }

            &-button {
                transition: 0.3s;
            }
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