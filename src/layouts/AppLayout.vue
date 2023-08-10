<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import { useWindowSize } from '@/shared/composables/useWindowSize.ts'
    import { useHasModals } from '@/layouts/hooks/useHasModals.ts'
    import { Ref, ref } from 'vue'

    const route = useRoute()
    const { height } = useWindowSize()
    const MainContainer: Ref<HTMLElement> = ref(null)
    useHasModals(MainContainer)
</script>

<template>
    <Component
        :is="route.meta.layoutComponent"
        ref="MainContainer"
        :style="{ minHeight: height + 'px' }"
    >
        <slot />
    </Component>
</template>

<style scoped></style>