<template>
    <div class="container mx-auto flex flex-col items-center justify-center">
        <FormKit
            type="form"
            v-model="recoverForm"
            submit-label="Recover"
            @submit="submitHandler"
        >
            <h1>Recover password!</h1>
            <hr />
            <FormKit
                type="email"
                name="email"
                label="Email"
                placeholder="jane@example.com"
                validation="required|email"
            />
        </FormKit>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAxios } from "@vueuse/integrations/useAxios";

const recoverForm = ref<{ email: string }>({
    email: "",
});

/**
 * Function used to submit the recover password form.
 * @param { { email: ""} } recoverData the data that is going to be submitted to the backend.
 */
async function submitHandler(recoverData: { email: string }, node: any): Promise<void> {
    /**
     * Make the api call and extract data and error from the response.
     */
    const { data, error } = await useAxios("recover-password", {
        method: "POST",
        data: recoverData,
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
        node.setErrors(
            error.value?.response?.data.message,
            error.value?.response?.data.errors
        )
    } else {
        console.log(data.value);
    }
}
</script>
