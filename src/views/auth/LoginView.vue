<template>
    <div class="container mx-auto flex flex-col items-center justify-center">
        <FormKit
            type="form"
            v-model="loginForm"
            submit-label="Login"
            :errors="generalError"
            @submit="submitHandler"
        >
            <h1>Login!</h1>
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
                :errors="validationErrors.email"
            />
            <FormKit
                type="password"
                name="password"
                label="Password"
                validation="required"
                placeholder="Your password"
                :errors="validationErrors.password"
            />
        </FormKit>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAxios } from "@vueuse/integrations/useAxios";
import { useAuthStore } from "@/stores/auth";
import type { LoginForm, LoginFormValidation } from "@/models/login";

const auth = useAuthStore();

const loginForm = ref<LoginForm>({
    email: "",
    password: "",
});

const validationErrors = ref<LoginFormValidation>({ email: [], password: [] });

const generalError = ref<string[]>([]);

async function submitHandler(loginData: LoginForm): Promise<void> {
    const { data, error } = await useAxios("login", {
        method: "POST",
        data: loginData,
    });

    if (error.value) {
        if (error.value.response?.data.message) {
            generalError.value.push(error.value.response.data.message);
        } else {
            validationErrors.value = error.value?.response?.data.errors;
        }
    } else {
        auth.token = data.value.data.token;
    }
}
</script>
