<script setup lang="ts">
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div class="relative flex h-screen flex-col flex-nowrap bg-gray-100">
    <div class="bg-gray-600">
      <header
        class="container mx-auto flex flex-row flex-nowrap items-center justify-between px-4"
      >
        <h1 class="text-2xl font-bold text-gray-50">fichaScript</h1>
        <Navigation></Navigation>
      </header>
    </div>
    <RouterView v-slot="{ Component }">
      <Transition
        mode="out-in"
        enter-active-class="transition-all duration-150 ease-in"
        enter-from-class="-translate-x-8 opacity-0"
        enter-to-class="translate-x-0 opacity-100"
        leave-active-class="transition-opacity duration-100 ease-out"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-4"
      >
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>
