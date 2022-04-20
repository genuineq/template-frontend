<template>
    <div class="container mx-auto flex flex-col items-center justify-center">
        <h1>Register form</h1>
        <form @submit.prevent="submitForm">
            <fieldset class="flex flex-col items-center justify-center gap-y-3">
                <legend>Basic input form</legend>
                <BaseInput
                    label="Email"
                    type="email"
                    v-model="registerForm.email"
                    :error="validationErrors?.email?.join(',')"
                />
                <BaseInput
                    label="Name"
                    type="text"
                    v-model="registerForm.name"
                    :error="validationErrors?.name?.join(',')"
                />
                <BaseInput
                    label="Password"
                    type="password"
                    v-model="registerForm.password"
                    :error="validationErrors?.password?.join(',')"
                />
                <BaseInput
                    label="Password Confirm"
                    type="password"
                    v-model="registerForm.password_confirmation"
                    :error="validationErrors?.password_confirmation?.join(',')"
                />
                <BaseCheckbox
                    label="test checkbox"
                    v-model="registerForm.tandc"
                    :error="validationErrors?.tandc?.join(',')"
                />
            </fieldset>

            <button class="mt-2 rounded-xl bg-blue-800 p-3 text-white" type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAxios } from "@vueuse/integrations/useAxios";
import BaseInput from "@/components/form/BaseInput.vue";
import BaseCheckbox from "@/components/form/BaseCheckbox.vue";
import type { RegisterForm, RegisterFormValidation } from "@/models/register";

const registerForm = ref<RegisterForm>({
    email: "",
    password: "",
    password_confirmation: "",
    name: "",
    tandc: false,
});

const validationErrors = ref<RegisterFormValidation>({
    email: [],
    password: [],
    password_confirmation: [],
    name: [],
    tandc: [],
});

function validateForm(): RegisterFormValidation {
    let errors: RegisterFormValidation = {};
    if (registerForm.value.email === "") {
        errors.email = ["The email is necessary"];
    }

    if (registerForm.value.password === "") {
        errors.password = ["The password is necessary"];
    }

    if (registerForm.value.name === "") {
        errors.name = ["The name is necessary"];
    }

    if (registerForm.value.password_confirmation === "") {
        errors.password_confirmation = ["The password_confirmation is necessary"];
    }

    if (registerForm.value.tandc === false) {
        errors.tandc = ["The tandc is necessary"];
    }

    return errors;
}

async function submitForm(): Promise<void> {
    validationErrors.value = validateForm();
    if (Object.keys(validationErrors.value).length !== 0) {
        return;
    }

    const { data, error } = await useAxios("register", {
        method: "POST",
        data: registerForm.value,
    });

    if (error.value) {
        validationErrors.value = error.value?.response?.data.errors;
    } else {
        console.log(data.value);
    }
}
</script>
