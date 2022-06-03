<script setup lang="ts">
import BaseSelect from "@/components/form/BaseSelect.vue";
import BaseToggle from "@/components/form/BaseToggle.vue";
import BaseRadioGroup from "@/components/form/BaseRadioGroup.vue";
import BaseModal from "@/components/common/BaseModal.vue";
import { ref } from "vue";
import type { Test } from "@/models/common";
import { useCounterStore } from "@/stores/counter";

const selectedRadio = ref<number>(0);
const testRadioOptions = ref<{ label: string; value: number }[]>([
    { label: "Yes", value: 1 },
    { label: "No", value: 0 },
    { label: "Maybe", value: 0.5 },
]);

const selectOptions = ref<Test[]>([
    { key: 1, label: "Yes", value: 1 },
    { key: 2, label: "No", value: 0 },
    { key: 3, label: "Maybe", value: 0.5 },
]);
const selected = ref<Test>(selectOptions.value[0]);

const checked = ref<boolean>(false);

const testModal = ref(false);

const counter = useCounterStore();

console.log(counter.ability);

import { useNow } from "@vueuse/core";

const now = useNow();

const inputTypes = [
    "button",
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "search",
    "select",
    "submit",
    "tel",
    "text",
    "textarea",
    "time",
    "url",
    "week",
];
const inputOptions = {
    checkbox: ["I like Tailwind", "I also like FormKit", "I like other things too"],
    radio: ["I like Tailwind", "I like FormKit", "I like everything"],
    select: ["I like Tailwind", "I like FormKit", "I like everything"],
};
</script>

<template>
    <div>
        {{ now.toLocaleTimeString() }}
    </div>
    <FormKit
        v-for="type in inputTypes"
        :key="type"
        :label="`This is a ${type} input`"
        :type="type"
        :placeholder="`${type} input placeholder`"
        :options="inputOptions[type] ? inputOptions[type] : null"
        :help="`Help text for the ${type} input`"
        :multiple="type === 'file'"
        :disabled="true"
        :validation="type === 'email' ? 'required|email' : 'required'"
        :validation-visibility="type === 'email' ? 'live' : 'blur'"
        :validation-label="type"
    />
    <div>OKOKOKOOK</div>
    <div>
        <div>OKOKOKOOK</div>
        OKOKOKOOK
    </div>
    <main>Home</main>
    {{ $t("test") }}
    <div>
        <button
            type="button"
            @click="testModal = true"
            class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
            Open dialog
        </button>
    </div>
    <BaseModal :opened="testModal" @close="testModal = false">
        <template v-slot:title> TITLE </template>
    </BaseModal>
    <BaseRadioGroup :options="testRadioOptions" v-model="selectedRadio" name="testRadio" />
    <BaseSelect v-model="selected" :options="selectOptions" />
    <BaseToggle v-model="checked" labelLeft="Da" labelRight="Nu" />
</template>
