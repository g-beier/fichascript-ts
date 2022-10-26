<script setup lang="ts">
import SkillSlot from "@/components/SkillSlot.vue";

const skills = ["Acrobacia", "Adestramento", "Atletismo"];
</script>

<template>
  <main class="container mx-auto mt-2 px-4">
    <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
    >
      <SkillSlot v-for="skill in skills" :key="skill" />
    </div>
  </main>
</template>
