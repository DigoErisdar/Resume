<template>
    <div class="MainLayout">
        <VHeader :name="siteName" />
        <main class="content">
            <slot></slot>
        </main>
        <VFooter />
    </div>
</template>

<script setup lang="ts">
    import VFooter from '@/widgets/VFooter.vue'
    import VHeader from '@/widgets/VHeader.vue'
    import { useBaseStore } from '@/shared/store/useBaseStore.ts'

    const { siteName } = useBaseStore()
</script>

<style scoped lang="scss">
    .MainLayout {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto;
        background: var(--primary-bg);
        position: relative;
        --aside-width: 320px;
        --height-header: 56px;

        main {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            container-type: size;
            container-name: main;
        }
    }
</style>