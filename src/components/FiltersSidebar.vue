<script setup lang="ts">
import { ref } from "vue";
import FiltersPanel from "./FiltersPanel.vue";
import { useTooltip } from "../composables/useTooltip";
import { useModal } from "../composables/useModal";
const props = defineProps<{ mobile: boolean; open: boolean }>();
const emit = defineEmits<{ close: [] }>();
const sidebar = ref<HTMLElement>();
const tooltip = useTooltip();
const { height } = useModal(
  sidebar,
  () => props.mobile && props.open,
  () => emit("close"),
  tooltip.hide,
);
</script>

<template>
  <Teleport to="body" :disabled="!mobile">
    <aside
      id="skills"
      ref="sidebar"
      class="side-column"
      :class="{ 'mobile-filters-open': mobile && open }"
      :style="mobile ? { height: `${height}px` } : undefined"
      :inert="mobile && !open"
      :role="mobile ? 'dialog' : undefined"
      :aria-modal="mobile && open ? true : undefined"
      :aria-hidden="mobile && !open ? true : undefined"
      :aria-labelledby="mobile ? 'filterDialogTitle' : undefined"
    >
      <FiltersPanel :mobile="mobile" @close="emit('close')" />
    </aside>
  </Teleport>
</template>
