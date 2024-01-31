<template>
    <div class="MainLayout">
        <main>
            <aside class="sidebar">
                <div class="sidebar-header">
                    Daniil Galkin
                </div>
            </aside>
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
</script>

<style scoped lang="scss">
    .MainLayout {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr minmax(50px, auto);
        background: var(--primary-bg);
        --aside-width: 320px;

        main {
            display: grid;
            grid-template-columns: var(--aside-width) 1fr;
        }
    }

    .sidebar {
        height: 100%;
        width: 100%;

        &-header {
            height: 56px;
            border-bottom: 1px solid var(--color-line);
            display: flex;
            align-items: center;
            padding: var(--padding);
        }
    }
</style>