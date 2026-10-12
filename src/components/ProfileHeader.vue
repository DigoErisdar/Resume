<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { contacts, profile } from "../data/profile";
import { NBSP, plural } from "../utils/dates";
import ContactIcon from "./ContactIcon.vue";
import RichText from "./RichText.vue";

const today = ref(new Date());
const age = computed(() => {
  const birth = profile.birthDate;
  const birthdayPassed =
    today.value.getMonth() + 1 > birth.month ||
    (today.value.getMonth() + 1 === birth.month &&
      today.value.getDate() >= birth.day);
  const years =
    today.value.getFullYear() - birth.year - (birthdayPassed ? 0 : 1);
  return `${years}${NBSP}${plural(years, ["год", "года", "лет"])}`;
});
function updateAge() {
  if (!document.hidden) today.value = new Date();
}
onMounted(() => document.addEventListener("visibilitychange", updateAge));
onUnmounted(() => document.removeEventListener("visibilitychange", updateAge));
</script>

<template>
  <header id="about" class="resume-header">
    <div class="profile-main">
      <div class="hero-eyebrow">Аналитика × Разработка</div>
      <h1>
        <span>{{ profile.firstName }}</span
        ><span class="name-surname"
          >{{ profile.lastName
          }}<span class="name-mark" aria-hidden="true">↗</span></span
        >
      </h1>
      <div class="resume-role">{{ profile.position }}</div>
      <div class="profile-meta">
        <span>{{ age }}</span
        ><span>{{ profile.location }}</span>
      </div>
      <div class="resume-kicker">О себе</div>
      <p class="resume-summary"><RichText :text="profile.summary" /></p>
      <div class="career-direction" aria-labelledby="careerDirectionTitle">
        <span id="careerDirectionTitle">Направление развития</span>
        <p>{{ profile.direction }}</p>
      </div>
    </div>
    <div id="contacts" class="profile-contact-panel">
      <figure class="candidate-photo">
        <div class="candidate-photo-slot">
          <img
            :src="profile.photo"
            :alt="`Фотография ${profile.firstName}а ${profile.lastName}а`"
            width="156"
            height="195"
          />
        </div>
        <figcaption>{{ profile.firstName }} {{ profile.lastName }}</figcaption>
      </figure>
      <div v-if="profile.activeSearch" class="profile-search-status">
        <i aria-hidden="true" />Активный поиск
      </div>
      <div class="contacts">
        <a
          v-for="contact in contacts"
          :key="contact.id"
          class="contact-link"
          :href="contact.href"
          target="_blank"
          rel="noopener noreferrer"
          ><ContactIcon :name="contact.id" /><span>{{ contact.label }}</span></a
        >
      </div>
      <dl class="profile-preferences">
        <div>
          <dt>Формат работы</dt>
          <dd>{{ profile.workFormat }}</dd>
        </div>
        <div>
          <dt>Релокация</dt>
          <dd>
            <span class="relocation-emphasis">{{ profile.relocation }}</span>
          </dd>
        </div>
        <div>
          <dt>Языки</dt>
          <dd>{{ profile.languages }}</dd>
        </div>
      </dl>
    </div>
  </header>
</template>
