import { defineStore } from 'pinia'
import { ref, shallowRef } from 'vue'

export const useBaseStore = defineStore('base', () => {
    const bp = ref(null)
    const siteName = shallowRef('daniil-galkin.vue')
    return {
        bp,
        siteName
    }
})
