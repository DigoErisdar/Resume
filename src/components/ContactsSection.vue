<script setup lang="ts">
import { contacts, profile } from "../data/profile";
import { formatDate } from "../utils/dates";
import ContactIcon from "./ContactIcon.vue";
</script>
<template>
  <section
    id="contact-links"
    class="resume-end"
    aria-labelledby="contactSectionTitle"
  >
    <h2 id="contactSectionTitle">Контакты</h2>
    <div class="contact-links">
      <a
        v-for="contact in contacts"
        :key="contact.id"
        :href="contact.href"
        target="_blank"
        rel="noopener noreferrer"
        ><span class="contact-service"
          ><ContactIcon :name="contact.id" /><b>{{ contact.label }}</b></span
        ><span class="contact-arrow" aria-hidden="true">↗</span></a
      >
    </div>
  </section>
  <footer class="resume-meta">
    Резюме обновлено
    <time :datetime="profile.updatedAt">{{
      formatDate(profile.updatedAt)
    }}</time>
  </footer>
</template>
