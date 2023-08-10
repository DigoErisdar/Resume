import { onMounted, onUnmounted, Ref, ref } from 'vue'

interface Size {
    width: Ref<number>
    height: Ref<number>
}

export function useResizeElement(element: Ref<Element> | HTMLElement): Size {
    const width = ref(0)
    const height = ref(0)
    const observer = new ResizeObserver(setSize)

    function setSize(entries: ResizeObserverEntry[]) {
        if (Array.isArray(entries)) {
            const entry = entries[0]
            height.value = entry.target.clientHeight
            width.value = entry.target.clientWidth
        }
    }

    onMounted(() => {
        if (element instanceof HTMLElement) {
            observer.observe(element)
        } else {
            observer.observe(element.value)
        }
    })

    onUnmounted(() => {
        observer.disconnect()
    })
    return { height, width }
}
