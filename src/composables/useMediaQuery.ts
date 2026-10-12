import { onMounted, onUnmounted, ref } from "vue";

export function useMediaQuery(query: string) {
  const media = window.matchMedia(query);
  const matches = ref(media.matches);
  const update = () => {
    matches.value = media.matches;
  };
  onMounted(() => media.addEventListener("change", update));
  onUnmounted(() => media.removeEventListener("change", update));
  return matches;
}
