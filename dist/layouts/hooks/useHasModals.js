import { computed, nextTick, provide, ref, watch } from 'vue';
export function useHasModals(content) {
    const modals = ref([]);
    const hasModals = computed(() => !!modals.value.values.length);
    provide('modals', modals);
    watch(hasModals, () => {
        nextTick().then(() => {
            if (content instanceof HTMLElement) {
                content.style.overflow = hasModals.value ? 'hidden' : 'overflow';
            }
            else {
                content.value.style.overflow = hasModals.value ? 'hidden' : 'overflow';
            }
        });
    });
}
