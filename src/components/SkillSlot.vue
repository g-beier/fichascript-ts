<script setup lang="ts">
import { computed, reactive } from "vue";
import { Switch } from "@headlessui/vue";
import CharacterInput from "./CharacterInput.vue";
import CharacterSelect from "./CharacterSelect.vue";
import { useMainStore } from "@/stores/mainStore";

const mainStore = useMainStore();
type Skill = {
  label: string;
  trained: boolean;
  bonus: number;
  stat: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";
  armorPenalty: boolean;
  onlyTrained: boolean;
};

// const props = defineProps(["skill"]);

const skill: Skill = reactive({
  label: "Acrobacia",
  trained: true,
  bonus: 0,
  stat: "DEX",
  armorPenalty: true,
  onlyTrained: false,
});

const total = computed(() => {
  const statMod = (mainStore as any)["stat" + skill.stat].mod();
  const levelProf = skill.trained ? mainStore.proficencyBonus : 0;
  const armor = skill.armorPenalty ? 0 : 0;
  return levelProf + statMod + armor + skill.bonus;
});
</script>

<template>
  <div class="rounded-md border border-gray-300 bg-white p-2 shadow-md">
    <div class="flex flex-row items-center justify-between">
      <strong>
        {{ skill.label }}
        <span
          class="ml-2 inline-block rounded-sm bg-sky-700 px-2 text-sm text-white"
        >
          {{ total > 0 ? `+${total}` : total }}
        </span>
      </strong>
      <Switch
        v-model="skill.trained"
        :class="skill.trained ? 'bg-gray-400' : 'bg-gray-300'"
        class="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring focus:ring-sky-200 focus:ring-opacity-50 focus:ring-offset-1 focus:ring-offset-sky-300 focus-visible:outline-none"
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
