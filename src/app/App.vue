<script setup lang="ts">
    import AppLayout from '@/layouts/AppLayout.vue'
</script>

<template>
    <AppLayout>
        <RouterView v-slot="{ Component }">
            <Component :is="Component" />
        </RouterView>
    </AppLayout>
</template>

<style lang="scss">
    @import '@/app/styles/index.scss';
</style>
