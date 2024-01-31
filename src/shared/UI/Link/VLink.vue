<template>
    <component
        :is="component"
        :to="src"
        :href="src"
        class="link"
        active-class="active"
    >
        <slot>{{ label }}</slot>
    </component>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import { Url } from '@/shared/types/navigation.ts'

    const props = defineProps<Url>()
    const component = computed(() => (props.src.startsWith('http') ? 'a' : 'RouterLink'))
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