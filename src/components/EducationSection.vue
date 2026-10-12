<script setup lang="ts">
import { education } from "../data/profile";
</script>
<template>
  <section id="education" class="education" aria-labelledby="educationTitle">
    <h2 id="educationTitle">Образование</h2>
    <div class="education-entry">
      <div class="education-details">
        <h3>{{ education.institution }}</h3>
        <p>{{ education.speciality }}</p>
      </div>
      <div class="education-year">
        <span>Год выпуска</span
        ><time :datetime="String(education.year)">{{ education.year }}</time>
      </div>
    </div>
  </section>
</template>
