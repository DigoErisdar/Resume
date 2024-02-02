<template>
    <aside class="sidebar">
        <div class="sidebar-header">daniil-galkin.vue</div>
    </aside>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
    .sidebar {
        flex-shrink: 0;
        height: 100%;
        width: var(--aside-width);
        container-type: size;
        container-name: sidebar;

        &-header {
            height: var(--height-header);
            border-bottom: 1px solid var(--color-line);
            display: flex;
            align-items: center;
            padding: var(--padding);
        }
    }
</style>
