import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("MainStore", () => {
  const characterName = ref("");
  const characterBackground = ref(undefined);
  const characterRace = ref(undefined);
  const characterAge = ref(undefined);
  const characterAlignment = ref("Neutro");
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
