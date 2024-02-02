<template>
    <DesktopHeader :urls />
</template>

<script setup lang="ts">
    import { shallowRef } from 'vue'
    import DesktopHeader from '@/shared/UI/DesktopHeader.vue'

    const urls = shallowRef([
        { src: '/', label: '_hello' },
        { src: '/about', label: '_about' }
    ])
</script>