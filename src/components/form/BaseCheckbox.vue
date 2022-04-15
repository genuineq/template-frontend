<template>
    <div>
        <label v-if="label" :for="id">{{ props.label }}</label>
        <input
            :id="id"
            v-bind="$attrs"
            type="checkbox"
            :checked="props.modelValue"
            @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
            :aria-describedby="props.error ? `${id}-error` : undefined"
            :aria-invalid="props.error ? true : undefined"
        />
        <p aria-live="assertive" :id="`${id}-error`" v-if="props.error">
            {{ props.error }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { onMounted, ref } from "vue";

const props = withDefaults(
    defineProps<{
        label?: string;
        modelValue?: boolean;
        error?: string;
    }>(),
    {
        label: "",
        modelValue: false,
        error: "",
    }
);

defineEmits<{
    (event: "update:modelValue", value: boolean): void;
}>();

const id = ref("");

onMounted(() => {
    id.value = uuidv4();
});
</script>
