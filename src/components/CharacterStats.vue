<script setup lang="ts">
import StatSlot from "./StatSlot.vue";
import { useMainStore } from "@/stores/mainStore";
const mainStore = useMainStore();
</script>

<template>
  <section class="mt-6">
    <h2 class="text-lg font-semibold tracking-tighter text-gray-800">
      Habilidades
    </h2>
    <div class="my-2 grid grid-cols-2 gap-4 sm:grid-cols-6 md:gap-8">
      <StatSlot v-model="mainStore.statSTR" />
      <StatSlot v-model="mainStore.statDEX" />
      <StatSlot v-model="mainStore.statCON" />
      <StatSlot v-model="mainStore.statINT" />
      <StatSlot v-model="mainStore.statWIS" />
      <StatSlot v-model="mainStore.statCHA" />
    </div>
  </section>
</template>
