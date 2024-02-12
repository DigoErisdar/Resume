import { ref, watch } from 'vue'

export function useLocalStorage(key: string, initialValue: any) {
    const storedValue = localStorage.getItem(key)
    const _value = ref(storedValue !== undefined ? JSON.parse(storedValue) : initialValue)
    watch(
        _value.value,
        (newValue) => {
            localStorage.setItem(key, JSON.stringify(_value.value))
        },
        { immediate: true }
    )
    return _value
}
