import { inject, onUnmounted, provide, shallowRef } from "vue";
import type { InjectionKey } from "vue";
import { glossary } from "../data/glossary";

interface TooltipState {
  term: string;
  description: string;
  anchor: HTMLElement;
}
function createTooltip() {
  const active = shallowRef<TooltipState | null>(null);
  function show(term: string, event: Event) {
    if (!(event.currentTarget instanceof HTMLElement) || !glossary[term])
      return;
    active.value = {
      term,
      description: glossary[term],
      anchor: event.currentTarget,
    };
  }
  function hide() {
    active.value = null;
  }
  onUnmounted(hide);
  return { active, show, hide };
}
type Tooltip = ReturnType<typeof createTooltip>;
const tooltipKey: InjectionKey<Tooltip> = Symbol("tooltip");
export function provideTooltip(): Tooltip {
  const tooltip = createTooltip();
  provide(tooltipKey, tooltip);
  return tooltip;
}
export function useTooltip(): Tooltip {
  const tooltip = inject(tooltipKey);
  if (!tooltip) throw new Error("Tooltip provider is missing");
  return tooltip;
}
