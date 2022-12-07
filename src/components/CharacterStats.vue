<script setup lang="ts">
import StatSlot from "./StatSlot.vue";
import { useMainStore } from "@/stores/mainStore";
const mainStore = useMainStore();
</script>

<template>
  <section class="mt-6">
    <h2 class="text-lg font-semibold tracking-tighter text-gray-900">
      Habilidades
    </h2>
    <div class="my-2 grid grid-cols-2 gap-4 sm:grid-cols-6 md:gap-8">
      <StatSlot v-model="mainStore.statStr" />
      <StatSlot v-model="mainStore.statDex" />
      <StatSlot v-model="mainStore.statCon" />
      <StatSlot v-model="mainStore.statInt" />
      <StatSlot v-model="mainStore.statWis" />
      <StatSlot v-model="mainStore.statCha" />
    </div>
  </section>
</template>
