<template>
    <TransitionRoot :show="props.opened" as="template">
        <Dialog as="div" @close="$emit('close')">
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="min-h-screen px-4 text-center">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-30"
                        entered="opacity-30"
                        leave="duration-200 ease-in"
                        leave-from="opacity-30"
                        leave-to="opacity-0"
                    >
                        <DialogOverlay class="fixed inset-0 bg-gray-600" />
                    </TransitionChild>

                    <span class="inline-block h-screen align-middle" aria-hidden="true">
                        &#8203;
                    </span>

                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <div
                            class="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                        >
                            <DialogTitle
                                as="h3"
                                class="text-lg font-medium leading-6 text-gray-900"
                            >
                                <slot name="title"></slot>
                            </DialogTitle>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">
                                    Your payment has been successfully submitted. We’ve sent you an
                                    email with all of the details of your order.
                                </p>
                            </div>

                            <div class="mt-4">
                                <button
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="$emit('close')"
                                >
                                    Got it, thanks!
                                </button>
                            </div>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
} from "@headlessui/vue";

const props = defineProps<{
    opened: boolean;
}>();

defineEmits<{
    (event: "close"): void;
}>();
</script>
