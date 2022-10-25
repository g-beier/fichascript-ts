<script setup lang="ts">
import { RouterLink } from "vue-router";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Bars3Icon } from "@heroicons/vue/24/solid";
</script>

<template>
  <Popover v-slot="{ open }" class="relative">
    <PopoverButton
      :class="open ? '' : 'text-opacity-70'"
      class="group rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      <Bars3Icon
        class="h-8 w-8 text-white transition duration-150 ease-in-out group-hover:text-opacity-80"
        :class="open ? '' : 'text-opacity-70'"
      ></Bars3Icon>
    </PopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel
        class="absolute right-0 z-10 mt-3 w-48 transform px-4 sm:px-0 lg:max-w-3xl"
      >
        <div
          class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div
            class="relative grid divide-y divide-neutral-300/50 bg-white text-neutral-900"
          >
            <RouterLink to="/" class="block px-4 py-2"> Personagem </RouterLink>

            <RouterLink to="/feats" class="block px-4 py-2">
              Poderes
            </RouterLink>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
