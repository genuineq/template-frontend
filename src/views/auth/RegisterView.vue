<template>
    <div class="container mx-auto flex justify-center">
        <FormKit
            type="form"
            v-model="registerForm"
            submit-label="Register"
            @submit="submitHandler"
        >
            <h1>Register!</h1>
            <p class="flex">
                You can put any type of element inside a form, not just FormKit inputs (although
                only FormKit inputs are included with the submission).
            </p>
            <hr />
            <FormKit
                type="text"
                name="name"
                label="Name"
                placeholder="Jane Doe"
                help="What do people call you?"
                validation="required"
                :errors="validationErrors.name"
            />
            <FormKit
                type="text"
                name="email"
                label="Email"
                placeholder="jane@example.com"
                help="What email should we use?"
                validation="required|email"
                :errors="validationErrors.email"
            />
            <div class="double">
                <FormKit
                    type="password"
                    name="password"
                    label="Password"
                    validation="required|length:6|matches:/[^a-zA-Z]/"
                    :validation-messages="{
                        matches: 'Please include at least one symbol',
                    }"
                    placeholder="Your password"
                    help="Choose an account password"
                    :errors="validationErrors.password"
                />
                <FormKit
                    type="password"
                    name="password_confirm"
                    label="Confirm password"
                    placeholder="Confirm password"
                    validation="required|confirm"
                    help="Choose an account password"
                    :errors="validationErrors.password_confirm"
                />
            </div>
            <FormKit
                type="checkbox"
                name="tandc"
                label="TandC"
                validation="accepted"
                help="You have to accept"
                :errors="validationErrors.tandc"
            />
        </FormKit>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAxios } from "@vueuse/integrations/useAxios";
import type { RegisterForm, RegisterFormValidation } from "@/models/register";

const registerForm = ref<RegisterForm>({
    email: '',
    name: '',
    password: '',
    password_confirm: '',
    tandc: false
});

const validationErrors = ref<RegisterFormValidation>({
    email: [],
    password: [],
    password_confirm: [],
    name: [],
    tandc: [],
});

const submitHandler = async (registerForm: RegisterForm) => {
    let registerData = registerForm;
    const { data, error } = await useAxios("register", {
        method: "POST",
        data: registerData,
    });

    if (error.value) {
        validationErrors.value = error.value?.response?.data.errors;
    } else {
        console.log(data.value);
    }
};
</script>
