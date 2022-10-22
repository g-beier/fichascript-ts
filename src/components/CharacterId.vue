<script setup lang="ts">
import { ref, computed } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import {
  PlusCircleIcon,
  ChevronUpDownIcon,
  CheckIcon,
} from "@heroicons/vue/20/solid";
import { useMainStore } from "@/stores/mainStore";
import CharacterInput from "./CharacterInput.vue";
import CharacterSelect from "./CharacterSelect.vue";
import CharacterCombobox from "./CharacterCombobox.vue";

const isExpOpen = ref(false);
function openExpModal() {
  isExpOpen.value = true;
}
function closeExpModal() {
  isExpOpen.value = false;
}

const xpArray: Array<number> = [];
for (let i = 0; i < 20; i++) {
  xpArray.push(i * (i + 1) * 500);
}
const levelByExp = computed(() => {
  return xpArray.findIndex((x) => x > mainStore.characterExperience);
});

const mainStore = useMainStore();
</script>
<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <CharacterInput
      v-model.trim="mainStore.characterName"
      :inputOptions="{ type: 'text' }"
    >
      Nome do Personagem
    </CharacterInput>

    <CharacterInput
      v-model.trim="mainStore.characterAge"
      :inputOptions="{ type: 'number', min: 0 }"
    >
      Idade
    </CharacterInput>

    <div class="flex w-full flex-row flex-nowrap items-end">
      <CharacterInput
        v-model.number="mainStore.level"
        :inputOptions="{ type: 'number', min: 1, max: 20 }"
      >
        Nível
      </CharacterInput>
      <button
        type="button"
        @click="openExpModal"
        class="px-3 py-2"
        title="Pontos de experiência"
      >
        <PlusCircleIcon
          :class="
            mainStore.level !== levelByExp ? 'text-red-500' : 'text-neutral-500'
          "
          class="h-6 w-6 text-neutral-500 hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
        />
      </button>
    </div>

    <CharacterSelect
      :options="[
        { label: 'Leal e Bondoso', value: 'LB' },
        { label: 'Neutro e Bondoso', value: 'NB' },
        { label: 'Caótico e Bondoso', value: 'CB' },
        { label: 'Leal e Neutro', value: 'LN' },
        { label: 'Neutro ', value: 'N' },
        { label: 'Caótico e Neutro', value: 'CN' },
        { label: 'Leal e Maligno', value: 'LM' },
        { label: 'Neutro e Maligno', value: 'NM' },
        { label: 'Caótico e Maligno', value: 'CM' },
      ]"
      v-model="mainStore.characterAlignment"
    >
      Alinhamento
    </CharacterSelect>

    <CharacterCombobox
      v-model="mainStore.characterRace"
      :options="[
        { label: 'Humano', value: 1 },
        { label: 'Elfo', value: 2 },
        { label: 'Lefou', value: 3 },
        { label: 'Dhallan', value: 4 },
        { label: 'Osteon', value: 5 },
        { label: 'Anão', value: 6 },
        { label: 'Sílfide', value: 7 },
        { label: 'Golem', value: 8 },
        { label: 'Minotauro', value: 9 },
      ]"
    >
      Raça
    </CharacterCombobox>
    <CharacterCombobox
      v-model="mainStore.characterBackground"
      :options="[
        { label: 'Alquimista', value: 1 },
        { label: 'Gladiador', value: 2 },
        { label: 'Taverneiro', value: 3 },
        { label: 'Eremita', value: 4 },
        { label: 'Guarda', value: 5 },
        { label: 'Pivete', value: 6 },
        { label: 'Assistente de Laboratório', value: 7 },
      ]"
    >
      Origem
    </CharacterCombobox>

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
                  <label class="block w-full">
                    <span class="text-sm text-gray-700">
                      Pontos de Experiência
                    </span>
                    <input
                      type="number"
                      v-model="mainStore.characterExperience"
                      min="0"
                      class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm selection:bg-red-200 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                    />
                  </label>
                  <p class="mt-2">
                    {{ mainStore.characterExperience }}&nbsp;pontos de
                    experiência corresponde ao nível&nbsp;{{ levelByExp }}.
                  </p>
                </div>
                <div class="mt-4 flex flex-row flex-nowrap gap-4">
                  <button
                    type="button"
                    :disabled="mainStore.level >= levelByExp"
                    @click="(mainStore.level = levelByExp) && closeExpModal()"
                    class="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-600"
                  >
                    Subir de nível
                  </button>
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
