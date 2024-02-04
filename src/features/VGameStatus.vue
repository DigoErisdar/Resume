<template>
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
</template>

<script setup lang="ts">
    import VButton from '@/shared/UI/Button/VButton.vue'
    import { computed } from 'vue'
    import { GameStatus } from '@/features/GameStatus.ts'

    interface Props {
        status: GameStatus
    }

    const props = defineProps<Props>()
    const emit = defineEmits<{
        (e: 'change', status: GameStatus): void
    }>()
    const actionOnStatus = computed(() => {
        switch (props.status) {
            case GameStatus.ready:
                return {
                    button: {
                        label: 'Start',
                        onClick: () => emit('change', GameStatus.ready)
                    },
                    message: false
                }
            case GameStatus.pause:
                return {
                    button: {
                        label: 'Continue',
                        onClick: () => emit('change', GameStatus.pause)
                    },
                    message: false
                }
            case GameStatus.end:
                return {
                    button: {
                        label: 'Restart',
                        onClick: () => emit('change', GameStatus.end)
                    },
                    message: 'Game Over'
                }
        }
    })
</script>

<style scoped lang="scss">
    .game {
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
    }
</style>