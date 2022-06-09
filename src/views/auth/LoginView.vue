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
import { useAxios } from "@vueuse/integrations/useAxios";
import { useAuthStore } from "@/stores/auth";
import type { LoginForm } from "@/models/login";

const auth = useAuthStore();

const loginForm = ref<LoginForm>({
    email: "",
    password: "",
});

/**
 * Function used to submit the recover password form.
 * @param {LoginForm} loginData the data that is going to be submitted to the backend.
 */
async function submitHandler(loginData: LoginForm, node: any): Promise<void> {
    /**
     * Make the api call and extract data and error from the response.
     */
    const { data, error } = await useAxios("login", {
        method: "POST",
        data: loginData,
    });

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
