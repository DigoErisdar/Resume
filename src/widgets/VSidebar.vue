<template>
    <aside class="sidebar">
        <slot></slot>
    </aside>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
    .sidebar {
        width: var(--aside-width);
        height: 100%;
        border-right: 1px solid var(--color-line);
        box-sizing: content-box;
    }
</style>
