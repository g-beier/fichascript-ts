<script setup lang="ts">
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div class="relative flex h-screen flex-col flex-nowrap">
    <div class="bg-neutral-600">
      <header
        class="container mx-auto flex flex-row flex-nowrap items-center justify-between px-4"
      >
        <h1 class="text-2xl font-bold text-neutral-50">fichaScript</h1>
        <Navigation></Navigation>
      </header>
    </div>
    <RouterView />
  </div>
</template>
