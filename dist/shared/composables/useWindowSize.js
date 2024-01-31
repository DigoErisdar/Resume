import { onMounted, onUnmounted, ref } from "vue";
export function useWindowSize() {
    const height = ref(0);
    const width = ref(0);
    function setSize() {
        height.value = window.innerHeight;
        width.value = window.innerWidth;
    }
    onMounted(() => {
        setSize();
        window.addEventListener('resize', setSize);
    });
    onUnmounted(() => {
        window.removeEventListener('resize', setSize);
    });
    return { height, width };
}
