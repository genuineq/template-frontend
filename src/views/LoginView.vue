<template>
    <div class="container mx-auto flex flex-col items-center justify-center">
        <h1>LOGIN form</h1>
        <form @submit.prevent="submitForm">
            <fieldset class="flex flex-col items-center justify-center gap-y-3">
                <legend>Basic input form</legend>
                <BaseInput
                    label="Email"
                    type="email"
                    v-model="loginForm.email"
                    :error="validationErrors?.email?.join(',')"
                />
                <BaseInput
                    label="Password"
                    type="password"
                    v-model="loginForm.password"
                    :error="validationErrors?.password?.join(',')"
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
import { useAuthStore } from "@/stores/auth";

interface LoginForm {
    email: string;
    password: string;
}

interface LoginFormValidation {
    email?: string[];
    password?: string[];
}

const auth = useAuthStore();

const loginForm = ref<LoginForm>({
    email: "",
    password: "",
});

const validationErrors = ref<LoginFormValidation>({ email: [], password: [] });

function validateForm(): LoginFormValidation {
    let errors: LoginFormValidation = {};
    if (loginForm.value.email === "") {
        errors.email = ["The email is necessary"];
    }

    if (loginForm.value.password === "") {
        errors.password = ["The password is necessary"];
    }

    return errors;
}

async function submitForm(): Promise<void> {
    validationErrors.value = validateForm();
    if ( Object.keys(validationErrors.value).length !== 0) {
        return;
    }

    const { data, error } = await useAxios("login", {
        method: "POST",
        data: loginForm.value,
    });

    if (error.value) {
        validationErrors.value = error.value?.response?.data.errors;
    } else {
        auth.token = data.value.data.token;
    }
}
</script>
