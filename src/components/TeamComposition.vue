<script setup lang="ts">
import { computed, ref } from "vue";
import type { TeamGroup } from "../types/resume";
import { teamRoles } from "../data/team-roles";
import { useTooltip } from "../composables/useTooltip";
import { NBSP, plural } from "../utils/dates";
import TermText from "./TermText.vue";

const props = defineProps<{ groups: readonly TeamGroup[] }>();
const tooltip = useTooltip();
const hovered = ref<number | null>(null);
const focused = ref<number | null>(null);
const highlighted = computed(() => hovered.value ?? focused.value);
const total = computed(() =>
  props.groups.reduce((sum, group) => sum + group.count, 0),
);
const label = (group: TeamGroup) =>
  group.roles.map((id) => teamRoles[id].label).join(" / ");
const groupColor = (group: TeamGroup) => teamRoles[group.roles[0]!].color;
function background(group: TeamGroup): string {
  if (group.roles.length === 1) return groupColor(group);
  return `linear-gradient(to right, ${group.roles
    .map(
      (id, index) =>
        `${teamRoles[id].color} ${(index / group.roles.length) * 100}%, ${teamRoles[id].color} ${((index + 1) / group.roles.length) * 100}%`,
    )
    .join(", ")})`;
}
function showRole(group: TeamGroup, event: Event) {
  if (group.roles.length === 1)
    tooltip.show(teamRoles[group.roles[0]!].term, event);
}
function clearFocus(index: number, event: FocusEvent) {
  if (
    !(event.currentTarget instanceof HTMLElement) ||
    !(event.relatedTarget instanceof Node) ||
    !event.currentTarget.contains(event.relatedTarget)
  ) {
    if (focused.value === index) focused.value = null;
    tooltip.hide();
  }
}
</script>

<template>
  <div class="team-line">
    <span class="content-label">Команда проекта</span>
    <div class="role-chips" :class="{ 'has-highlight': highlighted !== null }">
      <button
        v-for="(group, index) in groups"
        :key="group.roles.join('-')"
        class="team-role"
        type="button"
        :class="{ 'is-highlighted': highlighted === index }"
        :style="{ color: groupColor(group), borderColor: groupColor(group) }"
        :aria-label="`${label(group)}: ${group.count} ${plural(group.count, ['человек', 'человека', 'человек'])}`"
        @mouseenter="
          hovered = index;
          showRole(group, $event);
        "
        @mouseleave="
          hovered = null;
          tooltip.hide();
        "
        @focusin="
          focused = index;
          showRole(group, $event);
        "
        @focusout="clearFocus(index, $event)"
      >
        <span
          class="team-role-marker"
          :style="{ background: background(group) }"
          aria-hidden="true"
        />
        <template v-for="(id, roleIndex) in group.roles" :key="id">
          <template v-if="roleIndex"> / </template>
          <TermText
            v-if="group.roles.length > 1"
            :term="teamRoles[id].term"
            :style="{ color: teamRoles[id].color }"
            >{{ teamRoles[id].label }}</TermText
          >
          <span v-else>{{ teamRoles[id].label }}</span>
        </template>
      </button>
    </div>
    <div class="team-composition">
      <div class="team-composition-heading">
        <strong
          >{{ total }}{{ NBSP
          }}{{ plural(total, ["человек", "человека", "человек"]) }}</strong
        >
      </div>
      <div
        class="team-composition-bar"
        :class="{ 'has-highlight': highlighted !== null }"
        aria-label="Состав команды проекта"
      >
        <button
          v-for="(group, index) in groups"
          :key="group.roles.join('-')"
          class="team-composition-segment"
          type="button"
          :class="{ 'is-highlighted': highlighted === index }"
          :style="{ background: background(group), flexGrow: group.count }"
          :aria-label="`${label(group)}: ${group.count}`"
          :title="`${label(group)}: ${group.count}`"
          @mouseenter="hovered = index"
          @mouseleave="hovered = null"
          @focus="focused = index"
          @blur="focused = null"
        >
          {{ group.count }}
        </button>
      </div>
    </div>
  </div>
</template>
