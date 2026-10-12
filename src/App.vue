<script setup lang="ts">
import { ref, watch } from "vue";
import { companies } from "./data/companies";
import { provideExperienceFilters } from "./composables/useExperienceFilters";
import { useMediaQuery } from "./composables/useMediaQuery";
import { provideTooltip } from "./composables/useTooltip";
import CareerBreak from "./components/CareerBreak.vue";
import CompanyCard from "./components/CompanyCard.vue";
import ContactsSection from "./components/ContactsSection.vue";
import EducationSection from "./components/EducationSection.vue";
import FiltersSidebar from "./components/FiltersSidebar.vue";
import PetProjectSection from "./components/PetProjectSection.vue";
import ProfileHeader from "./components/ProfileHeader.vue";
import ScrollMinimap from "./components/ScrollMinimap.vue";
import TooltipPopover from "./components/TooltipPopover.vue";

const filters = provideExperienceFilters();
provideTooltip();
const mobile = useMediaQuery("(max-width: 800px)");
const modalOpen = ref(false);
watch(mobile, (value) => {
  if (!value) modalOpen.value = false;
});
</script>

<template>
  <main :inert="mobile && modalOpen">
    <ScrollMinimap />
    <section id="view-resume">
      <div class="resume-wrap">
        <article class="resume-paper">
          <ProfileHeader />
          <div class="resume-grid">
            <div class="main-column">
              <section class="experience-area">
                <header id="experience" class="experience-intro">
                  <div>
                    <small>Карьера</small>
                    <h2>Опыт работы</h2>
                  </div>
                </header>
                <button
                  class="mobile-filter-trigger"
                  type="button"
                  aria-controls="skills"
                  :aria-expanded="modalOpen"
                  @click="modalOpen = true"
                >
                  Фильтры
                  <span v-if="filters.selectedCount.value">{{
                    filters.selectedCount.value
                  }}</span>
                </button>
                <div id="experienceList">
                  <template v-for="company in companies" :key="company.id"
                    ><CareerBreak
                      v-if="company.id === 'placestart'" /><CompanyCard
                      :company="company"
                  /></template>
                </div>
              </section>
              <EducationSection /><PetProjectSection /><ContactsSection />
            </div>
            <FiltersSidebar
              :mobile="mobile"
              :open="modalOpen"
              @close="modalOpen = false"
            />
          </div>
        </article>
      </div>
    </section>
  </main>
  <TooltipPopover />
</template>
