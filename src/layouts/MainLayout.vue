<template>
    <div class="MainLayout">
        <main>
            <BaseSidebar />
            <div class="content">
                <BaseHeader />
                <slot></slot>
            </div>
        </main>
        <BaseFooter />
    </div>
</template>

<script setup lang="ts">
    import BaseFooter from '@/widgets/BaseFooter.vue'
    import BaseHeader from '@/widgets/BaseHeader.vue'
    import BaseSidebar from '@/widgets/BaseSidebar.vue'
</script>

<style scoped lang="scss">
    .MainLayout {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr minmax(50px, auto);
        background: var(--primary-bg);
        --aside-width: 320px;
        --height-header: 56px;

        .content {
            flex-grow: 1;
            display: grid;
            grid-template-rows: var(--height-header) 1fr;
        }

        main {
            display: flex;
            flex-direction: row;
            overflow: hidden;
            container-type: size;
            container-name: main;
        }
    }
</style>