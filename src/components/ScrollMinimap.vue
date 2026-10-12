<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const items = [
  { id: "about", label: "О себе", level: 1 },
  { id: "experience", label: "Опыт работы", level: 1 },
  { id: "ventra", label: "Ventra IT Solutions", level: 2 },
  { id: "lamoda", label: "Lamoda Tech", level: 2 },
  { id: "rostelecom", label: "Ростелеком ИТ", level: 2 },
  { id: "memorial", label: "ЦМИРиТ", level: 2 },
  { id: "placestart", label: "PLACESTART", level: 2 },
  { id: "education", label: "Образование", level: 1 },
] as const;

const activeIndex = ref(0);
let frame = 0;

function updateActive() {
  frame = 0;
  const guide = Math.min(window.innerHeight * 0.25, 140);
  let current = 0;
  for (const [index, item] of items.entries()) {
    const element = document.getElementById(item.id);
    if (element && element.getBoundingClientRect().top <= guide)
      current = index;
  }
  activeIndex.value = current;
}

function scheduleUpdate() {
  if (!frame) frame = window.requestAnimationFrame(updateActive);
}

function navigate(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

onMounted(() => {
  updateActive();
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
});
onUnmounted(() => {
  window.removeEventListener("scroll", scheduleUpdate);
  window.removeEventListener("resize", scheduleUpdate);
  if (frame) window.cancelAnimationFrame(frame);
});
</script>

<template>
  <nav class="scroll-minimap" aria-label="Навигация по резюме">
    <button
      v-for="(item, index) in items"
      :key="item.id"
      type="button"
      :class="[
        `scroll-minimap-level-${item.level}`,
        { 'is-active': index === activeIndex, 'is-past': index < activeIndex },
      ]"
      :aria-label="item.label"
      :aria-current="index === activeIndex ? 'location' : undefined"
      :data-label="item.label"
      :title="item.label"
      @click="navigate(item.id)"
    >
      <span aria-hidden="true" />
    </button>
  </nav>
</template>
