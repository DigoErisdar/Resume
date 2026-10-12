<script setup lang="ts">
import type { TextNode } from "../utils/rich-text";
import { glossary } from "../data/glossary";
import TermText from "./TermText.vue";
defineProps<{ nodes: readonly TextNode[] }>();
</script>
<template>
  <template v-for="(node, index) in nodes" :key="index">
    <template v-if="node.kind === 'text'">{{ node.text }}</template>
    <template v-else-if="node.kind === 'term'"
      ><TermText v-if="glossary[node.id]" :term="node.id">{{
        node.text
      }}</TermText
      ><template v-else>{{ node.text }}</template></template
    >
    <strong v-else-if="node.kind === 'strong'"
      ><RichTextNodes :nodes="node.children"
    /></strong>
    <a
      v-else
      class="contribution-link"
      :href="node.href"
      target="_blank"
      rel="noopener noreferrer"
      ><RichTextNodes :nodes="node.children" /><span
        class="inline-external-arrow"
        aria-hidden="true"
      >
        ↗</span
      ></a
    >
  </template>
</template>
