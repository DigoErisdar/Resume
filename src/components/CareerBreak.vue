<script setup lang="ts">
import { careerBreak } from "../data/profile";
import { formatDuration, formatMonth, mergedMonths } from "../utils/dates";
</script>
<template>
  <section class="job career-break" aria-labelledby="careerBreakTitle">
    <div class="job-head">
      <div>
        <div class="job-company">{{ careerBreak.title }}</div>
        <h3 id="careerBreakTitle">{{ careerBreak.subtitle }}</h3>
      </div>
      <div class="job-head-meta">
        <span class="job-date"
          >{{ formatMonth(careerBreak.start) }} —
          {{ formatMonth(careerBreak.end)
          }}<span class="job-duration">{{
            formatDuration(mergedMonths([careerBreak]))
          }}</span></span
        >
      </div>
    </div>
    <p>{{ careerBreak.description }}</p>
  </section>
</template>
