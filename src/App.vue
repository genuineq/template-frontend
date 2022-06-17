<template>
    <header>
        <img alt="Vue logo" class="logo" src="@/assets/images/logo.svg" width="125" height="125" />

        <div class="bg-red-400">
            <nav class="flex gap-x-2">
                <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
                <RouterLink :to="{ name: 'About' }">About</RouterLink>
                <RouterLink :to="{ name: 'Login' }">Login</RouterLink>
                <RouterLink :to="{ name: 'Register' }">Register</RouterLink>
                <RouterLink :to="{ name: 'RecoverPassword' }">Recover</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
