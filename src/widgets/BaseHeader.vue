<template>
    <MobileHeader :urls :name v-if="bp === Breakpoints.xs" />
    <DesktopHeader :urls :name v-else />
</template>

<script setup lang="ts">
    import { shallowRef } from 'vue'
    import DesktopHeader from '@/shared/UI/Header/DesktopHeader.vue'
    import { useBaseStore } from '@/shared/store/useBaseStore.ts'
    import { storeToRefs } from 'pinia'
    import { Breakpoints } from '@/shared/const/breakpoints.ts'
    import MobileHeader from '@/shared/UI/Header/MobileHeader.vue'

    defineProps<{ name: string }>()
    const { bp } = storeToRefs(useBaseStore())
    const urls = shallowRef([
        { src: '/', label: '_hello' },
        { src: '/about', label: '_about' },
        { src: '/contact', label: '_contact-me' }
    ])
</script>