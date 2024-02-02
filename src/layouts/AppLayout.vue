<template>
    <Component
        :is="route.meta.layoutComponent"
        ref="MainContainer"
        :style="{ height: height + 'px' }"
    >
        <slot />
    </Component>
</template>
<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import { useWindowSize } from '@/shared/composables/useWindowSize.ts'
    import { useHasModals } from '@/layouts/hooks/useHasModals.ts'
    import { onMounted, Ref, ref } from 'vue'
    import { useMedia } from '@/shared/composables/useMedia.ts'
    import { useBaseStore } from '@/shared/store/useBaseStore.ts'
    import { storeToRefs } from 'pinia'
    import { Breakpoints } from '@/shared/const/breakpoints.ts'

    const route = useRoute()
    const { height } = useWindowSize()
    const baseStore = storeToRefs(useBaseStore())
    const { init } = useMedia((breakpoint: Breakpoints) => (baseStore.bp.value = breakpoint))
    const MainContainer: Ref<HTMLElement> = ref(null)
    useHasModals(MainContainer)
    onMounted(init)
</script>
<style scoped></style>