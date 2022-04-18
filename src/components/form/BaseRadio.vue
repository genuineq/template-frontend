<template>
    <div>
        <label v-if="label" :for="id">{{ props.label }}</label>
        <input
            :id="id"
            v-bind="$attrs"
            type="radio"
            :checked="props.modelValue === props.value"
            :value="props.value"
            @change="$emit('update:modelValue', props.value)"
        />
    </div>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { onMounted, ref } from "vue";

const props = withDefaults(
    defineProps<{
        label?: string;
        modelValue?: string | number;
        value: string | number;
    }>(),
    {
        label: "",
        modelValue: "",
        value: "",
    }
);

defineEmits<{
    (event: "update:modelValue", value: string | number): void;
}>();

const id = ref("");

onMounted(() => {
    id.value = uuidv4();
});
</script>
