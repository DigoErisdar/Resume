<template>
    <div class="MainLayout">
        <BaseHeader :name />
        <main class="content">
            <slot></slot>
        </main>
        <BaseFooter />
    </div>
</template>

<script setup lang="ts">
    import BaseFooter from '@/widgets/VFooter.vue'
    import BaseHeader from '@/widgets/VHeader.vue'
    import { shallowRef } from 'vue'

    const name = shallowRef('daniil-galkin.vue')
</script>

<style scoped lang="scss">
    .MainLayout {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 50px 1fr auto;
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