<script setup lang="ts">
import BaseSelect from "@/components/form/BaseSelect.vue";
import BaseToggle from "@/components/form/BaseToggle.vue";
import BaseModal from "@/components/common/BaseModal.vue";
import BaseAlert from "@/components/common/BaseAlert.vue";
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";
import { useNow } from "@vueuse/core";

const selectOptions = [
    { key: 1, label: "Yes", value: 1 },
    { key: 2, label: "No", value: 0 },
    { key: 3, label: "Maybe", value: 0.5 },
];
const selected = ref([selectOptions[0], selectOptions[1]]);

const checked = ref<boolean>(false);

const testModal = ref(false);

const testAlert = ref(false);

// const counter = useCounterStore();

// console.log(counter.counter);

const now = useNow();
</script>

<template>
    <!-- <FormKit
        type="form"
        v-model="formData"
        :form-class="submitted ? 'hide' : 'show'"
        submit-label="Register"
        :submit-attrs="{
            'input-class': 'bg-blue-400 text-2xl',
        }"
        @submit="submitHandler"
    > -->

    <div class="test">
        {{ now.toLocaleTimeString() }}
    </div>
    {{ $t("test") }}
    <FormKit type="button" variant="error" @click="testModal = true" label="OpenDialog" />
    <BaseModal :opened="testModal" @close="testModal = false">
        <template v-slot:title> TITLE </template>
        <template v-slot:body> This is some body text to test </template>
        <template v-slot:footer>
            <button
                type="button"
                @click="testModal = false"
                class="rounded-xl bg-blue-300 p-2 text-white"
            >
                Got it, thanks!
            </button>
        </template>
    </BaseModal>
    <FormKit type="button" @click="testAlert = true" label="OpenAlert" />
    <BaseAlert
        :opened="testAlert"
        @close="testAlert = false"
        alertType="success"
        alertText="This is some sort of alert message that needs ot be longer"
    >
        <template v-slot:title> Alert </template>
    </BaseAlert>
    <BaseSelect :multiple="true" class="pb-3" v-model="selected" :options="selectOptions" />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" />

    <!-- <BaseSelect class="pb-3" v-model="selected" :options="selectOptions" />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /><BaseSelect
        class="pb-3"
        v-model="selected"
        :options="selectOptions"
    />
    <BaseToggle v-model="checked" labelLeft="Nu" labelRight="Da" /> -->
</template>
