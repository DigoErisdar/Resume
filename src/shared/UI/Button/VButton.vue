<template>
    <button class="button" @click="onClick" :class="[color]">
        <slot>{{ label }}</slot>
    </button>
</template>

<script setup lang="ts">
    import { Color } from '@/shared/types/Color.ts'

    interface Props {
        label?: string
        color?: Color
    }

    withDefaults(defineProps<Props>(), {
        color: Color.primary
    })
    const emit = defineEmits<{
        (e: 'click', data: { event: Event }): void
    }>()

    function onClick(event: Event) {
        emit('click', { event })
    }
</script>
<!-- TODO: Перевести цвета в lsh и сделать ховеры -->
<style scoped lang="scss">
    .button {
        padding: 14px;
        width: fit-content;
        border-radius: 8px;
        text-align: center;
        font-size: var(--fs-default);
        color: var(--primary-text);
        border: 1px solid transparent;
        background-color: var(--accent-orange);

        &.secondary {
            color: var(--light-color);
            background-color: var(--primary-3);
        }

        &.light {
            color: var(--light-color);
            border-color: var(--light-color);
            background: transparent;
        }
    }
</style>