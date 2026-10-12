<script setup lang="ts">
import { computed } from "vue";
import { parseRichText } from "../utils/rich-text";
import RichTextNodes from "./RichTextNodes.vue";
const props = defineProps<{ text: string }>();
const nodes = computed(() => parseRichText(props.text));
</script>
<template><RichTextNodes :nodes="nodes" /></template>
