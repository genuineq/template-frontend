<template>
    <div class="w-72">
        <Combobox
            :multiple="props.multiple"
            :modelValue="modelValue"
            @update:modelValue="$emit('update:modelValue', $event)"
        >
            <div class="relative mt-1">
                <div
                    class="w-full overflow-hidden rounded-lg shadow-md focus:outline-none sm:text-sm"
                >
                    <!-- This is the combobox input text to find options -->
                    <ComboboxInput
                        class="w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 outline-none"
                        :displayValue="
                            (option) =>
                                props.multiple ? option.map((option) => option.label) : option.label
                        "
                        @change="query = $event.target.value"
                    />

                    <!-- This is the combobox select icon. -->
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
                    <!-- This is the box of options for the select. -->
                    <ComboboxOptions
                        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm"
                    >
                        <div
                            v-if="filteredOptions.length === 0 && query !== ''"
                            class="relative cursor-default select-none py-2 px-4 text-gray-700"
                        >
                            Nothing found.
                        </div>

                        <!-- The rendering for each option -->
                        <ComboboxOption
                            v-for="option in filteredOptions"
                            :key="option.key"
                            :value="option"
                            v-slot="{ selected, active }"
                        >
                            <li
                                class="relative cursor-default py-2 pl-10 pr-4"
                                :class="{
                                    'bg-teal-600 text-white': active,
                                    'text-gray-900': !active,
                                }"
                            >
                                <!-- Label of the option. -->
                                <span
                                    class="block truncate"
                                    :class="{
                                        'font-medium': selected,
                                        'font-normal': !selected,
                                    }"
                                >
                                    {{ option.label }}
                                </span>

                                <!-- Whether the option is checked or not -->
                                <span
                                    v-if="selected"
                                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                                    :class="{
                                        'text-white': active,
                                        'text-teal-600': !active,
                                    }"
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

const props = withDefaults(
    defineProps<{
        options: any[];
        label?: string;
        multiple: boolean;
        modelValue: string | any[];
    }>(),
    {
        label: "",
        multiple: false,
    }
);

defineEmits<{
    (event: "update:modelValue", value: string | any[]): void;
}>();

let query = ref("");

/**
 * This function is used to filter the results based on the input.
 * If there is no value in the input, show everything, otherwise,
 * do some processing on the query and show the results.
 */
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
