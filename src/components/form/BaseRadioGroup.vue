<template>
    <RadioGroup>
        <RadioGroupLabel v-if="props.label">{{ props.label }}</RadioGroupLabel>
        <RadioGroupOption v-for="option in props.options" :key="option.label">
            <BaseRadio
                :label="option.label"
                :value="option.value"
                :modelValue="props.modelValue"
                :name="props.name"
                @update:modelValue="$emit('update:modelValue', $event)"
            />
        </RadioGroupOption>
    </RadioGroup>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import BaseRadio from "@/components/form/BaseRadio.vue";

const props = withDefaults(
    defineProps<{
        label?: string;
        options: { label: string; value: string | number }[];
        name: string;
        modelValue: string | number;
    }>(),
    {
        label: "",
    }
);

defineEmits<{
    (event: "update:modelValue", value: string | number): void;
}>();
</script>
