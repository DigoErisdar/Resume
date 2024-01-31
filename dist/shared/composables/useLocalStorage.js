import { computed, ref } from 'vue';
export function useLocalStorage(key, initialValue) {
    const storedValue = localStorage.getItem(key);
    const _value = ref(storedValue ? JSON.parse(storedValue) : initialValue);
    return computed({
        get: () => _value.value,
        set: (newValue) => {
            _value.value = newValue;
            localStorage.setItem(key, JSON.stringify(newValue));
        }
    });
}
