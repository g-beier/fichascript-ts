<script setup lang="ts">
import { IdentificationIcon, PlusCircleIcon } from "@heroicons/vue/24/solid";
import { useMainStore } from "@/stores/mainStore";
import CharacterInput from "./CharacterInput.vue";
import CharacterSelect from "./CharacterSelect.vue";
import CharacterCombobox from "./CharacterCombobox.vue";

import {
  data_races,
  data_alignments,
  data_backgrounds,
  data_deities,
} from "@/data/main";

const xpArray: Array<number> = [];
for (let i = 0; i < 20; i++) {
  xpArray.push(i * (i + 1) * 500);
}

const mainStore = useMainStore();
</script>
<template>
  <div class="grid gap-4 sm:grid-cols-2 md:gap-x-8 lg:grid-cols-4">
    <CharacterInput
      v-model.trim="mainStore.characterName"
      :inputOptions="{ type: 'text' }"
    >
      Nome do Personagem
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
        title="Classe e Pontos de Experiência"
        class="ml-2 inline-flex flex-row items-center rounded-md border border-gray-300 bg-white p-2 text-gray-400 transition-all duration-150 hover:text-sky-400 focus:border-sky-300 focus:text-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200"
      >
        <IdentificationIcon class="h-6 w-6" aria-hidden="true" />
        <span class="sr-only"> Classe e Pontos de Experiência </span>
      </button>
    </div>

    <div class="flex w-full flex-row flex-nowrap items-end">
      <CharacterCombobox
        v-model="mainStore.characterRace"
        :options="data_races"
      >
        Raça
      </CharacterCombobox>
      <button
        type="button"
        title="Habilidades de Raça"
        class="ml-2 inline-flex flex-row items-center gap-1 rounded-md border border-gray-300 bg-white p-2 text-gray-400 transition-all duration-150 hover:text-sky-400 focus:border-sky-300 focus:text-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200"
      >
        <PlusCircleIcon class="h-6 w-6" aria-hidden="true" />
        <span class="sr-only">Habilidades de Raça</span>
      </button>
    </div>

    <div class="flex w-full flex-row flex-nowrap items-end">
      <CharacterCombobox
        v-model="mainStore.characterBackground"
        :options="data_backgrounds"
      >
        Origem
      </CharacterCombobox>
      <button
        type="button"
        title="Benefícios de Origem"
        class="ml-2 inline-flex flex-row items-center gap-1 rounded-md border border-gray-300 bg-white p-2 text-gray-400 transition-all duration-150 hover:text-sky-400 focus:border-sky-300 focus:text-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200"
      >
        <PlusCircleIcon class="h-6 w-6" aria-hidden="true" />
        <span class="sr-only">Benefícios de Origem</span>
      </button>
    </div>

    <CharacterCombobox
      v-model="mainStore.characterDeity"
      :options="data_deities"
      placeholder="Sem divindade"
      nullable
    >
      Divindade
    </CharacterCombobox>

    <CharacterInput
      v-model.trim="mainStore.characterAge"
      :inputOptions="{ type: 'number', min: 0 }"
    >
      Idade
    </CharacterInput>

    <CharacterSelect
      :options="data_alignments"
      v-model="mainStore.characterAlignment"
    >
      Alinhamento
    </CharacterSelect>

    <div class="flex w-full flex-row flex-nowrap items-end"></div>
  </div>
</template>
