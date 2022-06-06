import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

/**
 * This is an composition api type of store, similar to setup function in vue 3.
 */
export const useAuthStore = defineStore("auth", () => {
    const token = useLocalStorage("authUser", "");

    return { token };
});
