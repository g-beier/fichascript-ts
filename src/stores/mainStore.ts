import { ref } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("MainStore", () => {
  const count = ref(0);
  return { count };
});
