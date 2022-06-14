<template>
    <SwitchGroup
        :id="id"
        as="div"
        :aria-describedby="props.error ? `${id}-error` : undefined"
        :aria-invalid="props.error ? true : undefined"
    >
        <div class="flex items-center gap-x-2">
            <SwitchLabel v-if="props.labelLeft">{{ props.labelLeft }}</SwitchLabel>
            <Switch
                ref="toggle"
                :checked="props.modelValue"
                @update:model-value="$emit('update:modelValue', !props.modelValue)"
                :class="props.modelValue ? 'bg-teal-400' : 'bg-teal-900'"
                class="relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
            >
                <span
                    aria-hidden="true"
                    :class="props.modelValue ? 'translate-x-6' : 'translate-x-0'"
                    class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                ></span>
            </Switch>
            <SwitchLabel v-if="props.labelRight">{{ props.labelRight }}</SwitchLabel>
        </div>

        <p aria-live="assertive" :id="`${id}-error`" v-if="props.error">
            {{ props.error }}
        </p>
    </SwitchGroup>
</template>

<script setup lang="ts">
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import { onMounted, ref } from "vue";
import { v4 as uuidv4 } from "uuid";

const props = withDefaults(
    defineProps<{
        modelValue: boolean;
        labelLeft?: string;
        labelRight?: string;
        error?: string;
    }>(),
    {
        labelLeft: "",
        labelRight: "",
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
