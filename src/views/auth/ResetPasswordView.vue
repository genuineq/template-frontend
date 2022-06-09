<template>
    <div class="container mx-auto flex justify-center">
        <FormKit type="form" v-model="resetForm" submit-label="Reset" @submit="submitHandler">
            <h1>Reset!</h1>
            <hr />
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
        </FormKit>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAxios } from "@vueuse/integrations/useAxios";
import { useRoute } from "vue-router";
import type { ResetForm } from "@/models/reset";

const route = useRoute();

const resetForm = ref<ResetForm>({
    password: "",
    password_confirm: "",
});

/**
 * Function used to submit the reset password form.
 * @param {ResetForm} resetData the data that is going to be submitted to the backend.
 */
async function submitHandler(resetData: ResetForm, node: any): Promise<void> {
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
