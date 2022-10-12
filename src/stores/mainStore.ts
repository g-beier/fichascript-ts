import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("MainStore", () => {
  const characterName = ref("");
  const characterBackground = ref(0);
  const characterRace = ref(0);
  const characterAge = ref(0);
  const characterAlignment = ref(0);
  const characterJobList = reactive([0, 2]);

  const level = ref(1);
  const halfLevel = computed(() => Math.floor(level.value / 2));

  return {
    characterName,
    characterBackground,
    characterRace,
    characterAge,
    characterAlignment,
    characterJobList,
    level,
    halfLevel,
  };
});
