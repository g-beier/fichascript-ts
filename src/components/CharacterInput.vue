<script setup lang="ts">
const props = defineProps<{
  modelValue: any;
  inputOptions: {
    type: string;
    min?: number;
    max?: number;
  };
}>();

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="block w-full">
    <span class="text-sm text-gray-700">
      <slot />
    </span>
    <input
      :min="inputOptions.min"
      :max="inputOptions.max"
      :type="inputOptions.type"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm selection:bg-red-200 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 focus-visible:outline-none"
    />
  </label>
</template>
