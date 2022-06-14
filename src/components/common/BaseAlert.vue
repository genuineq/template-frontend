<template>
    <TransitionRoot appear :show="props.opened" as="template">
        <Dialog as="div" @close="$emit('close')" class="relative z-10">
            <div class="fixed top-4 left-4 right-4 overflow-y-auto">
                <div class="flex items-center justify-center p-4">
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
                            class="flex w-full max-w-lg items-center justify-between gap-x-2 rounded-2xl p-4 shadow-xl"
                            :class="[props.alertType === 'success' ? 'bg-green-500' : 'bg-red-500']"
                        >
                            <!-- The alert text -->
                            <p class="text-left">{{ props.alertText }}</p>

                            <!-- The close button -->
                            <button
                                type="button"
                                @click="$emit('close')"
                                class="flex justify-end rounded-lg bg-white px-2 py-1 outline-none hover:bg-gray-300"
                            >
                                X
                            </button>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from "@headlessui/vue";
import { watch } from "vue";

const props = defineProps<{
    opened: boolean;
    alertText: string;
    alertType: "success" | "error";
}>();

const emit = defineEmits<{
    (event: "close"): void;
}>();

/**
 * Watch the props.opened prop so that we start
 * a timer for the component to close itself
 * after an amount of time.
 */
watch(
    () => props.opened,
    () => {
        setTimeout(() => {
            emit("close");
        }, 4000);
    }
);
</script>
