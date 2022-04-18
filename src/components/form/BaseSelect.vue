<template>
    <div class="fixed top-16 w-72">
        <Combobox v-model="selected" @update:modelValue="$emit('update:modelValue', selected)">
            <div class="relative mt-1">
                <div
                    class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
                >
                    <ComboboxInput
                        class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 outline-none focus:ring-0"
                        :displayValue="(option) => (option as Test).label"
                        @change="query = $event.target.value"
                    />
                    <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                        X
                    </ComboboxButton>
                </div>
                <TransitionRoot
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    @after-leave="query = ''"
                >
                    <ComboboxOptions
                        class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                        <div
                            v-if="filteredOptions.length === 0 && query !== ''"
                            class="relative cursor-default select-none py-2 px-4 text-gray-700"
                        >
                            Nothing found.
                        </div>

                        <ComboboxOption
                            v-for="option in filteredOptions"
                            as="template"
                            :key="option.key"
                            :value="option"
                            v-slot="{ selected, active }"
                        >
                            <li
                                class="relative cursor-default select-none py-2 pl-10 pr-4"
                                :class="{
                                    'bg-teal-600 text-white': active,
                                    'text-gray-900': !active,
                                }"
                            >
                                <span
                                    class="block truncate"
                                    :class="{ 'font-medium': selected, 'font-normal': !selected }"
                                >
                                    {{ option.label }}
                                </span>
                                <span
                                    v-if="selected"
                                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                                    :class="{ 'text-white': active, 'text-teal-600': !active }"
                                >
                                    V
                                </span>
                            </li>
                        </ComboboxOption>
                    </ComboboxOptions>
                </TransitionRoot>
            </div>
        </Combobox>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
} from "@headlessui/vue";
import type { Test } from "@/models/common";

const props = withDefaults(
    defineProps<{
        options: Test[];
        label?: string;
        modelValue: Test;
        error?: string;
    }>(),
    {
        label: "",
        error: "",
    }
);

defineEmits<{
    (event: "update:modelValue", value: Test): void;
}>();

let selected = ref(props.modelValue);
let query = ref("");

let filteredOptions = computed(() =>
    query.value === ""
        ? props.options
        : props.options.filter((option) =>
              option.label
                  .toLowerCase()
                  .replace(/\s+/g, "")
                  .includes(query.value.toLowerCase().replace(/\s+/g, ""))
          )
);
</script>
