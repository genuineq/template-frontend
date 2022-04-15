<template>
    <SwitchGroup as="div" class="flex items-center gap-x-2">
        <SwitchLabel v-if="props.labelLeft">{{ props.labelLeft }}</SwitchLabel>
        <Switch
            :checked="props.modelValue"
            @click="$emit('update:modelValue', !props.modelValue)"
            :class="props.modelValue ? 'bg-teal-400' : 'bg-teal-900'"
            class="relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
            <span class="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                :class="props.modelValue ? 'translate-x-6' : 'translate-x-0'"
                class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
            ></span>
        </Switch>
        <SwitchLabel v-if="props.labelRight">{{ props.labelRight }}</SwitchLabel>
    </SwitchGroup>
</template>

<script setup lang="ts">
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

const props = withDefaults(
    defineProps<{
        modelValue?: boolean;
        labelLeft?: string;
        labelRight?: string;
    }>(),
    {
        modelValue: false,
        labelLeft: "",
        labelRight: "",
    }
);

defineEmits<{
    (event: "update:modelValue", value: boolean): void;
}>();
</script>
