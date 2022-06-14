<template>
    <div class="container mx-auto flex flex-col items-center justify-center">
        <FormKit type="form" v-model="loginForm" submit-label="Login" @submit="submitHandler">
            <h1>Login!</h1>
            <hr />
            <FormKit
                type="email"
                name="email"
                label="Email"
                placeholder="jane@example.com"
                validation="required|email"
            />
            <FormKit
                type="password"
                name="password"
                label="Password"
                validation="required"
                placeholder="Your password"
            />
        </FormKit>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { http } from "@/utils/http";
import type { LoginForm } from "@/models/login";
import type { FormKitNode } from "@formkit/core";

const auth = useAuthStore();

const loginForm = ref<LoginForm>({
    email: "",
    password: "",
});

/**
 * Function used to submit the recover password form.
 * @param {LoginForm} loginData the data that is going to be submitted to the backend.
 */
async function submitHandler(loginData: LoginForm, node: FormKitNode): Promise<void> {
    /**
     * Reset errors before submitting.
     */
    node.setErrors([], {});

    /**
     * Make the api call and extract data and error from the response.
     */
    const { data, error } = await http("POST", "login", loginData);

    /**
     * If there is an error, show it, otherwise
     * set the auth token in the pinia store.
     */
    if (error.value) {
        /**
         * The first argument of the function sets form wide errors and takes an array.
         * The second arguments sets input specific errors and takes a key value object.
         * The key being the name of the input and the value being an array of errors.
         */
        node.setErrors(error.value?.response?.data.message, error.value?.response?.data.errors);
    } else {
        auth.token = data.value.data.token;
    }
}
</script>
