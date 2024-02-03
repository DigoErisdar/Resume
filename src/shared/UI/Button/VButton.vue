<template>
    <button class="button" @click="onClick">
        <slot>{{ label }}</slot>
    </button>
</template>

<script setup lang="ts">
    import { TargetEvent } from '@/shared/types/types.ts'

    interface Props {
        label?: string
    }

    defineProps<Props>()
    const emit = defineEmits<{
        (e: 'click', data: { event: TargetEvent<HTMLButtonElement> }): void
    }>()

    function onClick(event: TargetEvent<HTMLButtonElement>) {
        emit('click', { event })
    }
</script>

<style scoped lang="scss">
    .button {
        padding: 14px;
        width: fit-content;
        border-radius: 8px;
        text-align: center;
        background: rgb(254, 165, 95);
        font-size: var(--fs-default);
        --color: var(--primary-text);
        color: var(--color);
    }
</style>