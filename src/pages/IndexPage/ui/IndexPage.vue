<template>
    <div></div>
</template>

<script lang="ts" setup>
    import { HP } from '@/shared/heroes/entities/attrs.ts'

    const test = new HP().add(25).minus(30)
    console.log(test)
</script>