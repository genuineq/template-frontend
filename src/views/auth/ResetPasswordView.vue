<template>
    <div class="container mx-auto flex justify-center">
        <FormKit
            type="form"
            v-model="resetForm"
            submit-label="Reset"
            @submit="submitHandler"
            :errors="generalErrors"
        >
            <h1>Reset!</h1>
            <p class="flex">
                You can put any type of element inside a form, not just FormKit inputs (although
                only FormKit inputs are included with the submission).
            </p>
            <hr />
            <FormKit
                type="password"
                name="password"
                label="Password"
                validation="required|length:6"
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
        </FormKit>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAxios } from "@vueuse/integrations/useAxios";
import { useRoute } from "vue-router";
import type { ResetForm, ResetFormValidation } from "@/models/reset";

const route = useRoute();

const resetForm = ref<ResetForm>({
    password: "",
    password_confirm: "",
});

const validationErrors = ref<ResetFormValidation>({});

const generalErrors = ref<string[]>([]);

/**
 * Function used to submit the reset password form.
 * @param {ResetForm} resetData the data that is going to be submitted to the backend.
 */
async function submitHandler(resetData: ResetForm): Promise<void> {
    /**
     * Make the api call and extract data and error from the response.
     */
    const { data, error } = await useAxios("reset-password", {
        method: "POST",
        data: { token: route.query.token, ...resetData },
    });

    /**
     * If there is an error, show it, otherwise, use the data for further operations.
     */
    if (error.value) {
        if (error.value.response?.data.message) {
            generalErrors.value.push(error.value.response.data.message);
        } else {
            validationErrors.value = error.value?.response?.data.errors;
        }
    } else {
        console.log(data.value);
    }
}
</script>
