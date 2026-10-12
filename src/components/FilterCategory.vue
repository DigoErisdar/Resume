<script setup lang="ts">
import { computed, ref } from "vue";
import type { FilterCategory } from "../types/resume";
import { useExperienceFilters } from "../composables/useExperienceFilters";
import SkillButton from "./SkillButton.vue";
import CollapseRegion from "./CollapseRegion.vue";

const props = defineProps<{ category: FilterCategory }>();
const filters = useExperienceFilters();
const manualOpen = ref(props.category.defaultOpen);
const visibleSkills = computed(() =>
  props.category.skills.filter(filters.skillVisible),
);
const expanded = computed(() =>
  filters.query.value.trim() ? true : manualOpen.value,
);
const count = computed(
  () => props.category.skills.filter(filters.isSelected).length,
);
</script>

<template>
  <section
    v-show="visibleSkills.length"
    class="filter-group"
    :class="{ 'is-open': expanded }"
  >
    <button
      class="filter-group-toggle"
      type="button"
      :aria-expanded="expanded"
      :aria-controls="`filter-${category.id}`"
      @click="manualOpen = !manualOpen"
    >
      {{ category.label
      }}<span
        class="filter-group-count"
        :class="{ show: count > 0 }"
        aria-label="Выбрано навыков в категории"
        >{{ count }}</span
      >
    </button>
    <CollapseRegion
      :id="`filter-${category.id}`"
      class="filter-group-content"
      :expanded="expanded"
    >
      <div class="sidebar-tags">
        <SkillButton
          v-for="id in visibleSkills"
          :key="id"
          :id="id"
          variant="sidebar"
          :months="filters.skillMonths.get(id) ?? 0"
        />
      </div>
    </CollapseRegion>
  </section>
</template>
