<template>
    <div class="container mx-auto flex flex-col items-center justify-center">
        <h1>Reset passwoord form</h1>
        <form @submit.prevent="submitForm">
            <fieldset class="flex flex-col items-center justify-center gap-y-3">
                <legend>Basic input form</legend>
                <BaseInput
                    label="Password"
                    type="password"
                    v-model="password"
                    :error="validationPassword.join(',')"
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
import { useRoute } from "vue-router";

const route = useRoute();

const password = ref<string>("");

const validationPassword = ref<string[]>([]);

function validateForm() {
    let errors: string[] = [];
    if (password.value === "") {
        errors.push("The password is necessary");
    }

    return errors;
}

async function submitForm(): Promise<void> {
    validationPassword.value = validateForm();
    if (validationPassword.value.length !== 0) {
        return;
    }

    const { data, error } = await useAxios("reset-password", {
        method: "POST",
        data: { password: password.value, token: route.query.token },
    });

    if (error.value) {
        validationPassword.value = error.value?.response?.data.errors;
    } else {
        console.log(data.value);
    }
}
</script>
