<script setup lang="ts">
import { useMainStore } from "@/stores/mainStore";
import StatSlot from "../components/StatSlot.vue";

const mainStore = useMainStore();
</script>

<template>
  <main class="container mx-auto mt-2 px-4">
    <div
      class="relative grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 sm:gap-2 md:grid-cols-6 md:gap-4"
    >
      <StatSlot v-model="mainStore.statStr"></StatSlot>
      <StatSlot v-model="mainStore.statDex"></StatSlot>
      <StatSlot v-model="mainStore.statCon"></StatSlot>
      <StatSlot v-model="mainStore.statInt"></StatSlot>
      <StatSlot v-model="mainStore.statWis"></StatSlot>
      <StatSlot v-model="mainStore.statCha"></StatSlot>
    </div>
  </main>
</template>
