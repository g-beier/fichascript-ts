<script setup lang="ts">
import { computed } from "vue";
import { PlusCircleIcon } from "@heroicons/vue/20/solid";
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

    <div class="flex w-full flex-row flex-nowrap items-end">
      <CharacterInput
        v-model.number="mainStore.level"
        :inputOptions="{ type: 'number', min: 1, max: 20 }"
      >
        Nível
      </CharacterInput>
      <button type="button" class="px-3 py-2">
        <PlusCircleIcon
          :class="
            mainStore.level !== levelByExp ? 'text-red-500' : 'text-neutral-500'
          "
          class="h-6 w-6 text-neutral-500 hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
        />
      </button>
    </div>

    <CharacterCombobox v-model="mainStore.characterRace" :options="data_races">
      Raça
    </CharacterCombobox>

    <CharacterCombobox
      v-model="mainStore.characterBackground"
      :options="data_backgrounds"
    >
      Origem
    </CharacterCombobox>

    <CharacterCombobox
      v-model="mainStore.characterDeity"
      :options="data_deities"
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
  </div>
</template>
