<script setup lang="ts">
import { useTooltip } from "../composables/useTooltip";
defineProps<{ term: string }>();
const tooltip = useTooltip();
</script>

<template>
  <span
    class="term"
    :data-term="term"
    tabindex="0"
    :aria-describedby="
      tooltip.active.value?.anchor?.dataset.term === term
        ? 'skillPopover'
        : undefined
    "
    @mouseenter="tooltip.show(term, $event)"
    @mouseleave="tooltip.hide"
    @focus="tooltip.show(term, $event)"
    @blur="tooltip.hide"
    ><slot
  /></span>
</template>
