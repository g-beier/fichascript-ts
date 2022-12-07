<script setup lang="ts">
import SkillSlot from "@/components/SkillSlot.vue";

const skills = [
  {
    label: "Acrobacia",
    trained: true,
    bonus: 0,
    stat: "DEX",
    armorPenalty: true,
    onlyTrained: false,
  },
  {
    label: "Adestramento",
    trained: true,
    bonus: 0,
    stat: "CHA",
    armorPenalty: false,
    onlyTrained: true,
  },
  {
    label: "Atletismo",
    trained: false,
    bonus: 0,
    stat: "STR",
    armorPenalty: true,
    onlyTrained: true,
  },
];
</script>

<template>
  <main class="container mx-auto mt-2 px-4">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <SkillSlot v-for="s in skills" :key="s.label" :skill="s" />
    </div>
  </main>
</template>
