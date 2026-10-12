import { nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import type { Ref } from "vue";

/** Full-screen dialog lifecycle: viewport height, scroll lock and keyboard focus. */
export function useModal(
  element: Ref<HTMLElement | undefined>,
  active: () => boolean,
  close: () => void,
  hideTooltip: () => void,
) {
  const height = ref(window.visualViewport?.height || window.innerHeight);
  let returnFocus: HTMLElement | null = null;
  const modalActive = active;

  function updateHeight() {
    height.value = window.visualViewport?.height || window.innerHeight;
  }
  function lock(locked: boolean) {
    document.documentElement.classList.toggle("filters-modal-open", locked);
    document.body.classList.toggle("filters-modal-open", locked);
  }
  function trapFocus(event: KeyboardEvent) {
    if (!modalActive()) return;
    if (event.key === "Escape") {
      event.preventDefault();
      hideTooltip();
      close();
      return;
    }
    if (event.key !== "Tab" || !element.value) return;
    const items = [
      ...element.value.querySelectorAll<HTMLElement>(
        'button:not([disabled]),input:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])',
      ),
    ].filter(
      (element) =>
        !element.closest("[inert]") && element.getClientRects().length,
    );
    const first = items[0];
    const last = items.at(-1);
    if (!first || !last) return;
    if (!element.value.contains(document.activeElement)) {
      event.preventDefault();
      first.focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
  watch(
    modalActive,
    async (active) => {
      if (active && document.activeElement instanceof HTMLElement)
        returnFocus = document.activeElement;
      lock(active);
      hideTooltip();
      await nextTick();
      if (active)
        element.value
          ?.querySelector<HTMLButtonElement>(".mobile-filter-toggle")
          ?.focus();
      else if (returnFocus?.isConnected) {
        returnFocus.focus({ preventScroll: true });
        returnFocus = null;
      }
    },
    { flush: "post" },
  );
  onMounted(() => {
    document.addEventListener("keydown", trapFocus);
    window.addEventListener("resize", updateHeight);
    window.visualViewport?.addEventListener("resize", updateHeight);
  });
  onUnmounted(() => {
    lock(false);
    document.removeEventListener("keydown", trapFocus);
    window.removeEventListener("resize", updateHeight);
    window.visualViewport?.removeEventListener("resize", updateHeight);
  });

  return { height };
}
