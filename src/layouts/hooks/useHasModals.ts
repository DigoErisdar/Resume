import { computed, nextTick, provide, ref, Ref, watch } from 'vue'
import {modalsArray} from "@/layouts/types/modalsArray.ts";

export function useHasModals(content: Ref<HTMLElement> | HTMLElement) {
    const modals = ref<modalsArray>([])
    const hasModals = computed(() => !!modals.value.values.length)
    provide('modals', modals)
    watch(hasModals, () => {
        nextTick().then(() => {
            if (content instanceof HTMLElement) {
                content.style.overflow = hasModals.value ? 'hidden' : 'overflow'
            } else {
                content.value.style.overflow = hasModals.value ? 'hidden' : 'overflow'
            }
        })
    })
}
