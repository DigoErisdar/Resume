<template>
    <div class="MainLayout">
        <BaseHeader />
        <main>
            <slot></slot>
        </main>
        <BaseFooter />
    </div>
</template>

<script setup lang="ts">
    import BaseHeader from '@/widgets/BaseHeader.vue'
    import BaseFooter from '@/widgets/BaseFooter.vue'
</script>

<style scoped lang="scss">
    .MainLayout {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: minmax(56px, auto) 1fr minmax(50px, auto);
        background: var(--primary-bg);
    }
</style>