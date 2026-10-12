<script setup lang="ts">
import { computed } from "vue";
import { filterCategories } from "../data/skills";
import { useExperienceFilters } from "../composables/useExperienceFilters";
import { useTooltip } from "../composables/useTooltip";
import { NBSP, formatDuration, plural } from "../utils/dates";
import FilterCategory from "./FilterCategory.vue";

defineProps<{ mobile: boolean }>();
const emit = defineEmits<{ close: [] }>();
const filters = useExperienceFilters();
const tooltip = useTooltip();
const years = computed(() => Math.floor(filters.experienceMonths.value / 12));
const months = computed(() => filters.experienceMonths.value % 12);
const query = filters.query;
function selectOnlyResult(event: KeyboardEvent) {
  if (filters.visibleSkills.value.length !== 1) return;
  const id = filters.visibleSkills.value[0]!;
  event.preventDefault();
  filters.toggle(id);
}
</script>

<template>
  <section class="filter-panel">
    <div class="filter-heading">
      <h2 id="filterDialogTitle">Фильтры опыта</h2>
      <span
        :style="{
          visibility: filters.selectedCount.value ? 'visible' : 'hidden',
        }"
        class="active-filter-count"
        >{{ filters.selectedCount.value }}</span
      ><button
        v-if="mobile"
        class="mobile-filter-toggle"
        type="button"
        aria-label="Закрыть фильтры"
        @click="emit('close')"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div class="filter-overview" aria-live="polite">
      <div class="filter-overview-head">
        <small>Релевантный опыт</small
        ><button
          :style="{
            visibility: filters.selectedCount.value ? 'visible' : 'hidden',
          }"
          class="overview-reset"
          type="button"
          aria-label="Сбросить фильтры"
          title="Сбросить фильтры"
          @click="filters.clear"
        >
          ×
        </button>
      </div>
      <div class="combined-experience">
        <strong
          id="totalExperience"
          :aria-label="formatDuration(filters.experienceMonths.value)"
          ><span
            class="experience-years"
            :style="{ opacity: years ? 1 : 0 }"
            aria-hidden="true"
            >{{ years }}{{ NBSP
            }}{{ plural(years, ["год", "года", "лет"]) }}</span
          ><span
            class="experience-months"
            :style="{ opacity: months || !years ? 1 : 0 }"
            aria-hidden="true"
            >{{ months }}{{ NBSP
            }}{{ plural(months, ["месяц", "месяца", "месяцев"]) }}</span
          ></strong
        ><em>{{
          filters.selectedCount.value
            ? "по выбранным навыкам"
            : "общий профессиональный опыт"
        }}</em>
      </div>
    </div>
    <div class="mobile-filter-content">
      <label class="skill-search"
        ><span class="visually-hidden">Поиск навыка, инструмента или сферы</span
        ><input
          v-model="query"
          type="search"
          placeholder="Навык, инструмент или сфера"
          autocomplete="off"
          @input="tooltip.hide"
          @keydown.enter="selectOnlyResult"
      /></label>
      <p
        v-if="query.trim() && !filters.visibleSkills.value.length"
        class="skill-search-empty"
        role="status"
        aria-live="polite"
      >
        Ничего не найдено
      </p>
      <FilterCategory
        v-for="category in filterCategories"
        :key="category.id"
        :category="category"
      />
      <div v-if="filters.selectedCount.value" class="filter-actions">
        <button class="clear-filter" type="button" @click="filters.clear">
          Сбросить всё
        </button>
      </div>
    </div>
  </section>
</template>
