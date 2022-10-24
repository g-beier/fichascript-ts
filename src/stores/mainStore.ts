import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("MainStore", () => {
  const characterName = ref("");
  const characterRace = ref(0);
  const characterBackground = ref(0);
  const characterDeity = ref(0);
  const characterJobList = reactive([0, 2]);

  const level = ref(1);
  const halfLevel = computed(() => Math.floor(level.value / 2));
  const characterExperience = ref(0);

  const characterAlignment = ref("N");
  const characterAge = ref(undefined);

  return {
    characterName,
    characterRace,
    characterBackground,
    characterDeity,
    characterJobList,
    level,
    halfLevel,
    characterExperience,
    characterAlignment,
    characterAge,
  };
});
