import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("MainStore", () => {
  const characterName = ref("");
  const characterRace = ref(0);
  const characterBackground = ref(0);
  const characterDeity = ref(0);
  const characterJobList = reactive([
    "Arcanista",
    "Bárbaro",
    "Arcanista",
    "Bárbaro",
    "Paladino",
    "Paladino",
  ]);

  const level = ref(1);
  const halfLevel = computed(() => Math.floor(level.value / 2));
  const proficencyBonus = computed(() =>
    level.value >= 7 ? (level.value >= 15 ? 6 : 4) : 2
  );
  const characterExperience = ref(0);

  const characterAlignment = ref("N");
  const characterAge = ref(undefined);

  function createStat(label: string) {
    return {
      label: label.toUpperCase(),
      value: 10,
      temp: 0,
      mod() {
        return Math.floor((this.value + this.temp) / 2 - 5);
      },
    };
  }

  const statSTR = reactive(createStat("FOR"));
  const statDEX = reactive(createStat("DES"));
  const statCON = reactive(createStat("CON"));
  const statINT = reactive(createStat("INT"));
  const statWIS = reactive(createStat("SAB"));
  const statCHA = reactive(createStat("CAR"));

  return {
    characterName,
    characterRace,
    characterBackground,
    characterDeity,
    characterJobList,
    level,
    halfLevel,
    proficencyBonus,
    characterExperience,
    characterAlignment,
    characterAge,
    statSTR,
    statDEX,
    statCON,
    statINT,
    statWIS,
    statCHA,
  };
});
