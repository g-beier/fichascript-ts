<script setup lang="ts">
import CharacterInput from "../components/CharacterInput.vue";
import CharacterSelect from "../components/CharacterSelect.vue";
import CharacterCombobox from "../components/CharacterCombobox.vue";
import { useMainStore } from "@/stores/mainStore";

const mainStore = useMainStore();
</script>

<template>
  <main class="container mx-auto mt-2 px-4">
    <CharacterInput
      v-model="mainStore.level"
      :inputOptions="{ type: 'number', min: 1, max: 20 }"
    >
      Nível
    </CharacterInput>

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
  </main>
</template>
