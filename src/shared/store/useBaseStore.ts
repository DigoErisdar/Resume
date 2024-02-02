import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBaseStore = defineStore('base', () => {
    const bp = ref(null)
    return {
        bp
    }
})
