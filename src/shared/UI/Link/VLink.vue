<template>
    <component
        :is="component"
        :to="src"
        :href="src"
        class="link"
        active-class="active"
        @click="onClick"
    >
        <slot>{{ label }}</slot>
    </component>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import { TargetEvent } from '@/shared/types/types.ts'

    interface Props {
        label: string
        src: string
    }

    const props = defineProps<Props>()
    const component = computed(() => (props.src.startsWith('http') ? 'a' : 'RouterLink'))
    const emit = defineEmits<{
        (e: 'click', data: { event: TargetEvent<HTMLLinkElement> }): void
    }>()

    function onClick(event: TargetEvent<HTMLLinkElement>) {
        emit('click', { event })
    }
</script>

<style scoped lang="scss">
    .link {
        height: 100%;
        color: var(--secondary);
        transition: 0.15s;
        cursor: pointer;

        &:hover,
        &.active {
            color: var(--light-color);
            transition: 0.3s;
        }
    }
</style>