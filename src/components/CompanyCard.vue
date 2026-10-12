<script setup lang="ts">
import { computed, ref } from "vue";
import type { Company } from "../types/resume";
import { useExperienceFilters } from "../composables/useExperienceFilters";
import { useTooltip } from "../composables/useTooltip";
import { formatDuration, formatMonth, mergedMonths } from "../utils/dates";
import CollapseRegion from "./CollapseRegion.vue";
import ProjectCard from "./ProjectCard.vue";
import RichText from "./RichText.vue";

const props = defineProps<{ company: Company }>();
const collapsed = ref(props.company.defaultCollapsed);
const filters = useExperienceFilters();
const tooltip = useTooltip();
const duration = computed(() => formatDuration(mergedMonths([props.company])));
function toggle() {
  tooltip.hide();
  collapsed.value = !collapsed.value;
}
function handleHeaderClick(event: MouseEvent) {
  if (
    !(event.target instanceof Element) ||
    event.target.closest("a,button,.term,.employment-verified") ||
    window.getSelection()?.toString()
  )
    return;
  toggle();
}
</script>

<template>
  <article
    :id="company.id"
    class="job"
    :class="{
      'is-collapsed': collapsed,
      'is-irrelevant': !filters.companyRelevant(company),
    }"
    :data-company="company.name"
  >
    <div class="job-head" @click="handleHeaderClick">
      <div>
        <div class="job-company">
          <a
            class="company-link"
            :aria-label="`${company.name} — официальный сайт`"
            :href="company.website"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              class="company-logo"
              :class="`company-logo--${company.logoKey}`"
              :src="company.logo"
              alt=""
              width="32"
              height="32"
              loading="lazy"
            /><span v-if="!company.hideName" class="company-link-label"
              >{{ company.name
              }}<span class="company-link-arrow" aria-hidden="true"
                >&nbsp;↗</span
              ></span
            ><span v-else class="company-link-arrow" aria-hidden="true"
              >↗</span
            ></a
          >
        </div>
        <h3><RichText :text="company.position" /></h3>
        <span v-if="company.hasRecommendation" class="recommendation-note"
          >Есть рекомендация работодателя</span
        >
        <div class="employment-facts" aria-label="Условия работы">
          <span>{{ company.workFormat }}</span
          ><span>{{ company.employment }}</span
          ><span
            v-if="company.verified"
            class="employment-verified"
            tabindex="0"
            :aria-describedby="`${company.id}-proof`"
            ><span aria-hidden="true">✓</span> По ТК РФ<span
              :id="`${company.id}-proof`"
              class="employment-proof"
              role="tooltip"
              >Опыт подтвержден</span
            ></span
          >
        </div>
      </div>
      <div class="job-head-meta">
        <button
          class="job-collapse"
          type="button"
          :aria-expanded="!collapsed"
          :aria-controls="`${company.id}-content`"
          :aria-label="collapsed ? 'Развернуть опыт' : 'Свернуть опыт'"
          :title="collapsed ? 'Развернуть' : 'Свернуть'"
          @click.stop="toggle"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <span class="job-date"
          >{{ formatMonth(company.start) }} — {{ formatMonth(company.end)
          }}<span class="job-duration">{{ duration }}</span></span
        >
      </div>
    </div>
    <CollapseRegion
      :id="`${company.id}-content`"
      class="job-body"
      :expanded="!collapsed"
      ><ProjectCard
        v-for="project in company.projects"
        :key="project.id"
        :project="project"
    /></CollapseRegion>
  </article>
</template>
