<script setup lang="ts">
import type { Project } from "../types/resume";
import { useExperienceFilters } from "../composables/useExperienceFilters";
import RichText from "./RichText.vue";
import SkillButton from "./SkillButton.vue";
import TeamComposition from "./TeamComposition.vue";
defineProps<{ project: Project }>();
const filters = useExperienceFilters();
</script>

<template>
  <section
    :id="project.id"
    class="work-project"
    :class="{ 'is-irrelevant': !filters.projectRelevant(project) }"
    :aria-labelledby="`${project.id}-title`"
  >
    <header class="work-project-head">
      <span class="content-label">{{ project.eyebrow }}</span>
      <h4 :id="`${project.id}-title`">{{ project.title }}</h4>
      <div v-if="project.domains.length" class="project-domain">
        <span>Сфера</span>
        <SkillButton v-for="id in project.domains" :id="id" :key="id" />
      </div>
      <p><RichText :text="project.description" /></p>
    </header>
    <TeamComposition :groups="project.team" />
    <span class="content-label">Достижения</span>
    <ul>
      <li v-for="(contribution, index) in project.contributions" :key="index">
        <RichText :text="contribution" />
      </li>
    </ul>
    <span class="content-label">Обязанности</span>
    <ul>
      <li v-for="(item, index) in project.responsibility" :key="index">
        <RichText :text="item" />
      </li>
    </ul>
    <p v-if="project.result" class="impact result-highlight">
      <strong>Результат:</strong><RichText :text="project.result" />
    </p>
    <div class="project-skills-label">Применял в работе</div>
    <div
      class="tags"
      aria-label="Навыки и инструменты, которые я применял в проекте"
    >
      <SkillButton v-for="id in project.skills" :id="id" :key="id" />
    </div>
  </section>
</template>
