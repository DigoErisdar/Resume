<template>
    <table :class="style.TableWidget" cellpadding="0" cellspacing="0">
        <tr v-for="row in matrix">
            <td
                v-for="block in row"
                :class="[
                    style.TableWidgetBlock,
                    !!block.color ? style.TableWidgetEmptyBlock : '',
                    block.color
                ]"
            ></td>
        </tr>
    </table>
</template>

<script lang="ts" setup>
    import style from './TableWidget.module.scss'
    import { Matrix } from '@/shared/libs/Tetris/types/Game.ts'

    interface Props {
        matrix: Matrix
    }

    defineProps<Props>()
</script>

<style lang="scss" scoped>
    .Line {
        --color: var(--secondary-lightblue);
    }

    .Cube {
        --color: var(--accent-yellow);
    }

    .T {
        --color: var(--accent-pink);
    }

    .Z {
        --color: var(--accent-green);
    }

    .RZ {
        --color: var(--accent-red);
    }

    .G {
        --color: var(--accent-orange);
    }

    .RG {
        --color: var(--secondary-blue);
    }
</style>