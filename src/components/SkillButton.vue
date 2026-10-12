<script setup lang="ts">
import { skills } from "../data/skills";
import type { SkillId } from "../data/skills";
import { useExperienceFilters } from "../composables/useExperienceFilters";
import { useTooltip } from "../composables/useTooltip";
import { formatDuration } from "../utils/dates";
withDefaults(
  defineProps<{ id: SkillId; variant?: "tag" | "sidebar"; months?: number }>(),
  { variant: "tag" },
);
const filters = useExperienceFilters();
const tooltip = useTooltip();
</script>

<template>
  <button
    type="button"
    :class="[
      variant === 'sidebar' ? 'sidebar-skill' : 'tag',
      { active: filters.isSelected(id) },
    ]"
    :data-skill="skills[id].label"
    :data-term="skills[id].term"
    :aria-pressed="filters.isSelected(id)"
    @click="
      tooltip.hide();
      filters.toggle(id);
    "
    @mouseenter="tooltip.show(skills[id].term, $event)"
    @mouseleave="tooltip.hide"
    @focus="tooltip.show(skills[id].term, $event)"
    @blur="tooltip.hide"
  >
    <span v-if="variant === 'sidebar'" class="filter-skill-copy"
      ><strong>{{ skills[id].label }}</strong
      ><small v-if="months !== undefined"
        >≈ {{ formatDuration(months) }}</small
      ></span
    >
    <template v-else>{{ skills[id].label }}</template>
  </button>
</template>
