<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import { useTooltip } from "../composables/useTooltip";

const tooltip = useTooltip();
const active = tooltip.active;
const popover = ref<HTMLElement>();
const position = ref({ left: "0px", top: "0px" });
const description = computed(() => active.value?.description || "");
watch(active, async (value) => {
  if (!value) return;
  await nextTick();
  if (!popover.value || active.value !== value) return;
  const anchor = value.anchor.getBoundingClientRect();
  const box = popover.value.getBoundingClientRect();
  const padding = 12;
  const left = Math.max(
    padding,
    Math.min(
      anchor.left + (anchor.width - box.width) / 2,
      window.innerWidth - box.width - padding,
    ),
  );
  let top = anchor.top - box.height - 10;
  if (top < padding) top = anchor.bottom + 10;
  top = Math.max(
    padding,
    Math.min(top, window.innerHeight - box.height - padding),
  );
  position.value = { left: `${left}px`, top: `${top}px` };
});
function onEscape(event: KeyboardEvent) {
  if (event.key === "Escape") tooltip.hide();
}
onMounted(() => {
  document.addEventListener("scroll", tooltip.hide, {
    passive: true,
    capture: true,
  });
  document.addEventListener("keydown", onEscape);
  window.addEventListener("resize", tooltip.hide);
});
onUnmounted(() => {
  document.removeEventListener("scroll", tooltip.hide, true);
  document.removeEventListener("keydown", onEscape);
  window.removeEventListener("resize", tooltip.hide);
});
</script>

<template>
  <Teleport to="body"
    ><div
      id="skillPopover"
      ref="popover"
      class="skill-popover"
      :class="{ show: !!active }"
      :style="position"
      role="tooltip"
      :aria-hidden="!active"
    >
      <strong>{{ active?.term }}</strong>
      <p>{{ description }}</p>
    </div></Teleport
  >
</template>
