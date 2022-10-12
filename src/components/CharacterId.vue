<script setup lang="ts">
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
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
  <div>
    <h2>Character Id</h2>
    <div>
      <button
        type="button"
        @click="openExpModal"
        class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white"
      >
        Experiência
      </button>
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
