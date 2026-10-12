<script setup lang="ts">
import { onBeforeUnmount } from "vue";
defineProps<{ expanded: boolean; id?: string }>();
const animations = new Map<HTMLElement, Animation>();

function cancel(element: Element) {
  const panel = element as HTMLElement;
  const animation = animations.get(panel);
  if (!animation) return;
  panel.style.height = `${panel.getBoundingClientRect().height}px`;
  animations.delete(panel);
  animation.cancel();
}

function animate(element: Element, expanded: boolean, done: () => void) {
  const panel = element as HTMLElement;
  const from =
    panel.style.height ||
    (expanded ? "0px" : `${panel.getBoundingClientRect().height}px`);
  cancel(panel);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    panel.style.height = "";
    done();
    return;
  }
  const height = panel.scrollHeight;
  const animation = panel.animate(
    [{ height: from }, { height: expanded ? `${height}px` : "0px" }],
    {
      duration: Math.min(560, Math.max(320, height * 0.25)),
      easing: "cubic-bezier(.32,0,.2,1)",
    },
  );
  animations.set(panel, animation);
  animation.finished.then(
    () => {
      if (animations.get(panel) !== animation) return;
      animations.delete(panel);
      panel.style.height = "";
      done();
    },
    () => {
      /* Vue owns cancellation; do not finish a superseded transition. */
    },
  );
}
onBeforeUnmount(() => {
  animations.forEach((animation) => animation.cancel());
  animations.clear();
});
</script>

<template>
  <Transition
    :css="false"
    @enter="(el, done) => animate(el, true, done)"
    @leave="(el, done) => animate(el, false, done)"
    @enter-cancelled="cancel"
    @leave-cancelled="cancel"
  >
    <div v-show="expanded" :id="id" class="collapse-region" :inert="!expanded">
      <div class="collapse-region-inner"><slot /></div>
    </div>
  </Transition>
</template>
