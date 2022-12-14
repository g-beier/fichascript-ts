<script setup lang="ts">
import { ref, computed } from "vue";
import {
  Combobox,
  ComboboxInput,
  ComboboxLabel,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const props = defineProps<{
  modelValue: number | string;
  nullable?: boolean;
  options: { value: number | string; label: string }[];
  placeholder?: string;
}>();

let query = ref("");

let label = computed(
  () => props.options.find((option) => option.value === props.modelValue)?.label
);

let filteredOptions = computed(() =>
  query.value === ""
    ? props.options
    : props.options.filter((option) =>
        option.label
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);
</script>
<template>
  <div class="block w-full">
    <Combobox
      :modelValue="props.modelValue ?? null"
      @update:modelValue="(value) => $emit('update:modelValue', value)"
      :nullable="props?.nullable"
    >
      <ComboboxLabel class="text-sm text-gray-700">
        <slot />
      </ComboboxLabel>
      <div class="relative mt-1">
        <div
          class="relative w-full cursor-default rounded-md border-gray-300 bg-white text-left shadow-sm focus:outline-none focus-visible:ring focus-visible:ring-sky-200 focus-visible:ring-opacity-50 sm:text-sm"
        >
          <ComboboxInput
            class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm selection:bg-sky-200 placeholder:text-gray-400 focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 focus-visible:outline-none"
            :displayValue="
              (value) =>
                props.options.find((option) => option.value === value)?.label ||
                ''
            "
            :placeholder="props?.placeholder"
            @change="query = $event.target.value"
            spellcheck="false"
          />
          <ComboboxButton
            class="absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <ChevronUpDownIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </ComboboxButton>
        </div>
        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''"
        >
          <ComboboxOptions
            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <div
              v-if="filteredOptions.length === 0 && query !== ''"
              class="relative cursor-default select-none py-2 px-4 text-gray-700"
            >
              Nenhum item encontrado.
            </div>

            <ComboboxOption
              v-for="option in filteredOptions"
              as="template"
              :key="option.label"
              :value="option.value"
              v-slot="{ selected, active }"
            >
              <li
                class="relative cursor-default select-none py-2 pl-10 pr-4"
                :class="[
                  active ? 'bg-sky-100 text-sky-900' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                ]"
              >
                <span
                  class="block truncate"
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                >
                  {{ option.label }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-600"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>
