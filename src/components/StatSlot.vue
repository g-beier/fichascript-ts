<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import CharacterInput from "./CharacterInput.vue";

const props = defineProps(["modelValue"]);
</script>

<template>
  <Popover v-slot="{ open }" class="relative">
    <PopoverButton
      :class="open ? 'bg-red-50' : ''"
      class="flex w-full flex-col items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-500 hover:bg-sky-100 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 focus-visible:outline-none"
    >
      <span class="text-sm font-medium tracking-tight">
        {{ props.modelValue.label }}
      </span>
      <span>
        {{ (props.modelValue.mod() > 0 ? "+" : "") + props.modelValue.mod() }}
      </span>
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
        class="absolute inset-x-0 bottom-full z-10 mx-auto mb-2 w-full max-w-sm @container sm:top-full sm:mt-2"
      >
        <div
          class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-25"
        >
          <div
            class="relative flex flex-col items-center gap-2 bg-white p-2 @micro:flex-row lg:gap-4"
          >
            <CharacterInput
              class="flex-0"
              v-model.number="props.modelValue.value"
              :inputOptions="{ type: 'number', min: 0 }"
            >
              Valor
            </CharacterInput>
            <CharacterInput
              class="flex-0"
              v-model.number="props.modelValue.temp"
              :inputOptions="{ type: 'number' }"
            >
              Temp.
            </CharacterInput>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
