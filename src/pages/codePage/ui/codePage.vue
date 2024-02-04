<template>
    <section class="code">
        <VSidebar />
        <div class="content">code-page</div>
    </section>
</template>

<script setup lang="ts">
    import VSidebar from '@/widgets/VSidebar.vue'
</script>

<style scoped lang="scss">
    .code {
        height: 100%;
        display: grid;
        grid-template-columns: auto 1fr;
    }
</style>