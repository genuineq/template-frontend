<template>
    <div>
        <h1>This is an about page</h1>
    </div>
    <button class="rounded-lg bg-red-600 p-3 text-lg text-white" @click="logout">Logout</button>
</template>

<script setup lang="ts">
import { useAxios } from "@vueuse/integrations/useAxios";
import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();

async function logout(): Promise<void> {
    const { data, error } = await useAxios("logout", {
        method: "POST",
    });

    if (!error.value) {
        auth.token = "";
    }
}
</script>
