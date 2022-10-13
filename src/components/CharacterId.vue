<script setup lang="ts">
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  ListboxLabel,
} from "@headlessui/vue";
import {
  PlusCircleIcon,
  ChevronUpDownIcon,
  CheckIcon,
} from "@heroicons/vue/20/solid";
import { useMainStore } from "@/stores/mainStore";

const isExpOpen = ref(false);

function openExpModal() {
  isExpOpen.value = true;
}
function closeExpModal() {
  isExpOpen.value = false;
}

const mainStore = useMainStore();
</script>
<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <label class="block w-full">
      <span class="text-sm text-gray-700">Nome do personagem</span>
      <input
        type="text"
        v-model.trim="mainStore.characterName"
        class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
      />
    </label>

    <label class="block w-full">
      <span class="text-sm text-gray-700">Nível</span>
      <div class="flex">
        <input
          type="number"
          min="1"
          v-model.number="mainStore.level"
          class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
        />
        <button
          type="button"
          @click="openExpModal"
          class="px-3 py-2"
          title="Pontos de experiência"
        >
          <PlusCircleIcon
            class="h-6 w-6 text-neutral-500 hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
          ></PlusCircleIcon>
        </button>
      </div>
    </label>

    <div class="block w-full">
      <Listbox v-model="mainStore.characterAlignment">
        <ListboxLabel class="text-sm text-gray-700">Alinhamento</ListboxLabel>
        <div class="relative mt-1">
          <ListboxButton
            class="relative w-full cursor-default rounded-md border border-neutral-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50"
          >
            <span class="block truncate">
              {{ mainStore.characterAlignment || "&nbsp; " }}
            </span>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <ChevronUpDownIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              ></ChevronUpDownIcon>
            </span>
          </ListboxButton>
          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <ListboxOption
                v-slot="{ active, selected }"
                v-for="(a, i) in [
                  'Leal e Bondoso',
                  'Neutro e Bondoso',
                  'Caótico e Bondoso',
                  'Leal e Neutro',
                  'Neutro',
                  'Caótico e Neutro',
                  'Leal e Maligno',
                  'Neutro e Maligno',
                  'Caótico e Maligno',
                ]"
                :key="i"
                :value="a"
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
                    {{ a }}
                  </span>
                  <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600"
                  >
                    <CheckIcon class="h-5 w-5" aria-hidden="true"></CheckIcon>
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>

    <!-- DIALOG - EXPERIÊNCIA -->
    <TransitionRoot appear :show="isExpOpen" as="template">
      <Dialog as="div" @close="closeExpModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-neutral-900 bg-opacity-50"></div>
        </TransitionChild>
        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="tansform w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-neutral-900"
                >
                  Pontos de Experiência
                </DialogTitle>
                <div class="mt-2">
                  <p>content</p>
                </div>
                <div class="mt-4">
                  <button
                    type="button"
                    @click="closeExpModal"
                    class="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  >
                    Fechar
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
