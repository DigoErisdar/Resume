<template>
    <MobileHeader :urls="urls" :name="siteName" v-if="bp === Breakpoints.xs" />
    <DesktopHeader :urls="urls" :name="siteName" v-else />
</template>

<script setup lang="ts">
    import { shallowRef } from 'vue'
    import DesktopHeader from '@/shared/UI/Header/DesktopHeader.vue'
    import { useBaseStore } from '@/shared/store/useBaseStore.ts'
    import { storeToRefs } from 'pinia'
    import { Breakpoints } from '@/shared/const/breakpoints.ts'
    import MobileHeader from '@/shared/UI/Header/MobileHeader.vue'

    defineProps<{ name: string }>()
    const { bp, siteName } = storeToRefs(useBaseStore())
    const urls = shallowRef([
        { src: '/', label: '_hello' },
        { src: '/code/', label: '_code' },
        { src: '/test/', label: '_test' }
    ])
</script>