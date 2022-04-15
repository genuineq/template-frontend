<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="bg-red-400">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/login">Login</RouterLink>
                <RouterLink to="/register">Register</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>
