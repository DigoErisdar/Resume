import {
  computed,
  inject,
  onMounted,
  onUnmounted,
  provide,
  readonly,
  ref,
  watch,
} from "vue";
import type { InjectionKey } from "vue";
import { companies } from "../data/companies";
import {
  createExperienceIndex,
  projectMatches,
  skillIds,
  skillMatchesQuery,
} from "../utils/experience";
import type { SkillId } from "../data/skills";
import type { Company, Project } from "../types/resume";

import { readSkillsFromUrl, writeSkillsToUrl } from "../utils/skill-url";

function createExperienceFilters() {
  const selected = ref<SkillId[]>(
    readSkillsFromUrl(new URL(window.location.href)),
  );
  const query = ref("");
  const index = createExperienceIndex(companies);
  const selectedCount = computed(() => selected.value.length);
  const isSelected = (id: SkillId) => selected.value.includes(id);
  const projectRelevant = (project: Project) =>
    projectMatches(project, selected.value);
  const companyMatches = (company: Company) =>
    index.matches(company, selected.value);
  const companyRelevant = (company: Company) =>
    index.relevant(company, selected.value);
  const experienceMonths = computed(() => index.months(selected.value));
  const skillMonths = index.skillMonths;
  const skillVisible = (id: SkillId) => skillMatchesQuery(id, query.value);
  const visibleSkills = computed(() => skillIds.filter(skillVisible));

  function toggle(id: SkillId) {
    selected.value = isSelected(id)
      ? selected.value.filter((skill) => skill !== id)
      : [...selected.value, id];
  }
  function clear() {
    selected.value = [];
  }
  function syncUrl() {
    const next = writeSkillsToUrl(
      new URL(window.location.href),
      selected.value,
    );
    if (next.href !== window.location.href)
      window.history.replaceState(window.history.state, "", next);
  }
  function restore() {
    selected.value = readSkillsFromUrl(new URL(window.location.href));
  }
  watch(selected, syncUrl, { flush: "sync" });
  onMounted(() => {
    syncUrl();
    window.addEventListener("popstate", restore);
  });
  onUnmounted(() => window.removeEventListener("popstate", restore));

  return {
    selected: readonly(selected),
    selectedCount,
    query,
    isSelected,
    toggle,
    clear,
    companyRelevant,
    companyMatches,
    projectRelevant,
    experienceMonths,
    skillMonths,
    skillVisible,
    visibleSkills,
  };
}

export type ExperienceFilters = ReturnType<typeof createExperienceFilters>;
const filtersKey: InjectionKey<ExperienceFilters> =
  Symbol("experience-filters");

export function provideExperienceFilters(): ExperienceFilters {
  const filters = createExperienceFilters();
  provide(filtersKey, filters);
  return filters;
}

export function useExperienceFilters(): ExperienceFilters {
  const filters = inject(filtersKey);
  if (!filters) throw new Error("Experience filters provider is missing");
  return filters;
}
