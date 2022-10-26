<script setup lang="ts">
import { computed } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/vue/20/solid";
const props = defineProps<{
  modelValue: number | string;
  options: { value: number | string; label: string }[];
}>();

const emit = defineEmits(["update:modelValue"]);

const label = computed(
  () => props.options.find((option) => option.value === props.modelValue)?.label
);
</script>

<template>
  <div class="block w-full">
    <Listbox
      :modelValue="props.modelValue"
      @update:modelValue="(value) => $emit('update:modelValue', value)"
    >
      <ListboxLabel class="text-sm text-gray-700">
        <slot />
      </ListboxLabel>
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50"
        >
          <span class="block truncate">
            {{ label }}
          </span>
          <span
            class="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2"
          >
            <ChevronUpDownIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>
        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="(option, index) in options"
              :key="index"
              :value="option.value"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-red-100 text-red-900' : 'text-neutral-900',
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                >
                  {{ option.label }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
