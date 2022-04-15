<template>
    <div class="container mx-auto flex flex-col items-center justify-center">
        <h1>Recover passwoord form</h1>
        <form @submit.prevent="submitForm">
            <fieldset class="flex flex-col items-center justify-center gap-y-3">
                <legend>Basic input form</legend>
                <BaseInput
                    label="Email"
                    type="email"
                    v-model="email"
                    :error="validationEmail.join(',')"
                />
            </fieldset>

            <button class="mt-2 rounded-xl bg-blue-800 p-3 text-white" type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/form/BaseInput.vue";
import { ref } from "vue";
import { useAxios } from "@vueuse/integrations/useAxios";

const email = ref<string>("");

const validationEmail = ref<string[]>([]);

function validateForm() {
    let errors: string[] = [];
    if (email.value === "") {
        errors.push("The email is necessary");
    }

    return errors;
}

async function submitForm(): Promise<void> {
    validationEmail.value = validateForm();
    if (validationEmail.value.length !== 0) {
        return;
    }

    const { data, error } = await useAxios("recover-password", {
        method: "POST",
        data: { email: email.value },
    });

    if (error.value) {
        validationEmail.value = error.value?.response?.data.errors;
    } else {
        console.log(data.value);
    }
}
</script>
