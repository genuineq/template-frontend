<template>
    <div class="container mx-auto flex flex-col items-center justify-center">
        <FormKit
            type="form"
            v-model="recoverForm"
            submit-label="Recover"
            :errors="generalError"
            @submit="submitHandler"
        >
            <h1>Recover password!</h1>
            <p class="flex">
                You can put any type of element inside a form, not just FormKit inputs (although
                only FormKit inputs are included with the submission).
            </p>
            <hr />
            <FormKit
                type="email"
                name="email"
                label="Email"
                placeholder="jane@example.com"
                validation="required|email"
                :errors="validationEmail"
            />
        </FormKit>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAxios } from "@vueuse/integrations/useAxios";

const recoverForm = ref<{email: string}>({
    email: ''
});

const validationEmail = ref<string[]>([]);

const generalError = ref<string[]>([]);

async function submitHandler(recoverForm: { email: string }): Promise<void> {
    const { data, error } = await useAxios("recover-password", {
        method: "POST",
        data: recoverForm,
    });

   if (error.value) {
        if (error.value.response?.data.message) {
            generalError.value.push(error.value.response.data.message);
        } else {
            validationEmail.value = error.value?.response?.data.errors;
        }
    } else {
        console.log(data.value);
    }
}
</script>
