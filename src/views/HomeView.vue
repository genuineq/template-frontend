<script setup lang="ts">
import BaseSelect from "@/components/form/BaseSelect.vue";
import BaseToggle from "@/components/form/BaseToggle.vue";
import BaseRadioGroup from "@/components/form/BaseRadioGroup.vue";
import BaseModal from "@/components/common/BaseModal.vue";
import { ref } from "vue";

const selectedRadio = ref<number>(0);
const testRadioOptions = ref<{ label: string; value: number }[]>([
    { label: "Yes", value: 1 },
    { label: "No", value: 0 },
    { label: "Maybe", value: 0.5 },
]);

const selectOptions = ref<{ key: number; label: string; value: number }[]>([
    { key: 1, label: "Yes", value: 1 },
    { key: 2, label: "No", value: 0 },
    { key: 3, label: "Maybe", value: 0.5 },
]);
const selected = ref<{ key: number; label: string; value: number }>(selectOptions.value[0]);

const checked = ref<boolean>(false);

const testModal = ref(false);
</script>

<template>
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
