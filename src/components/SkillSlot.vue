<script setup lang="ts">
import { reactive, computed } from "vue";
import { Switch } from "@headlessui/vue";
import CharacterInput from "./CharacterInput.vue";
import CharacterSelect from "./CharacterSelect.vue";
import { useMainStore } from "@/stores/mainStore";

const mainStore = useMainStore();
const props = defineProps(["skill"]);

type Skill = {
  label: string;
  trained: boolean;
  bonus: number;
  stat: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";
  armorPenalty: boolean;
  onlyTrained: boolean;
};

const skill = props.skill;
</script>

<template>
  <div class="rounded-md border border-gray-400 bg-white p-2 shadow-md">
    <div class="flex flex-row items-center justify-between">
      <strong>{{ skill.label }}</strong>
      <Switch
        v-model="skill.trained"
        :class="skill.trained ? 'bg-gray-400' : 'bg-gray-300'"
        class="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring focus:ring-red-200 focus:ring-opacity-50 focus:ring-offset-1 focus:ring-offset-red-300 focus-visible:outline-none"
      >
        <span class="sr-only">Treinamento em {{ skill.label }}</span>
        <span
          aria-hidden="true"
          :class="skill.trained ? 'translate-x-4' : 'translate-x-0 '"
          class="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        >
        </span>
      </Switch>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <CharacterInput
        v-model.number="skill.bonus"
        :input-options="{ type: 'number' }"
      >
        Bônus
      </CharacterInput>
      <CharacterSelect
        v-model="skill.stat"
        :options="[
          { value: 'STR', label: 'FOR' },
          { value: 'DEX', label: 'DES' },
          { value: 'CON', label: 'CON' },
          { value: 'INT', label: 'INT' },
          { value: 'WIS', label: 'SAB' },
          { value: 'CHA', label: 'CAR' },
        ]"
      >
        Habilidade
      </CharacterSelect>
    </div>
  </div>
</template>
