<template>
    <section class="test">
        <div class="group">
            <VButton label="Button" />
            <VButton label="Button" :color="Color.secondary" />
            <VButton label="Button" :color="Color.light" />
        </div>
    </section>
</template>

<script setup lang="ts">
    import VButton from '@/shared/UI/Button/VButton.vue'
    import { Color } from '@/shared/types/Color.ts'
</script>

<style scoped lang="scss">
    .test {
        height: 100%;
        padding: var(--padding);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;

        .group {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
    }
</style>