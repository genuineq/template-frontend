<template>
    <div class="container mx-auto flex justify-center">
        <FormKit type="form" v-model="registerForm" submit-label="Register" @submit="submitHandler">
            <h1>Register!</h1>
            <hr />
            <FormKit
                type="text"
                name="name"
                label="Name"
                placeholder="Jane Doe"
                help="What do people call you?"
                validation="required"
            />
            <FormKit
                type="email"
                name="email"
                label="Email"
                placeholder="jane@example.com"
                help="What email should we use?"
                validation="required|email"
            />
            <FormKit
                type="password"
                name="password"
                label="Password"
                validation="required|length:6"
                placeholder="Your password"
                help="Choose an account password"
            />
            <FormKit
                type="password"
                name="password_confirm"
                label="Confirm password"
                placeholder="Confirm password"
                validation="required|confirm"
                help="Choose an account password"
            />
            <FormKit
                type="checkbox"
                name="terms_and_conditions"
                label="Terms and conditions"
                validation="accepted"
                help="You have to accept"
            />
        </FormKit>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { http } from "@/utils/http";
import type { RegisterForm } from "@/models/register";
import type { FormKitNode } from "@formkit/core";

const registerForm = ref<RegisterForm>({
    email: "",
    name: "",
    password: "",
    password_confirm: "",
    terms_and_conditions: false,
});

/**
 * Function used to submit the register form.
 * @param {RegisterForm} registerData the data that is going to be submitted to the backend.
 */
async function submitHandler(registerData: RegisterForm, node: FormKitNode): Promise<void> {
    /**
     * Reset errors before submitting.
     */
    node.setErrors([], {});

    /**
     * Make the api call and extract data and error from the response.
     */
    const { data, error } = await http("POST", "register", registerData);

    /**
     * If there is an error, show it, otherwise, use the data for further operations.
     */
    if (error.value) {
        /**
         * The first argument of the function sets form wide errors and takes an array.
         * The second arguments sets input specific errors and takes a key value object.
         * The key being the name of the input and the value being an array of errors.
         */
        node.setErrors(error.value?.response?.data.message, error.value?.response?.data.errors);
    } else {
        console.log(data.value);
    }
}
</script>
