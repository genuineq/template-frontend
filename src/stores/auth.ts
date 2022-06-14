import { defineStore } from "pinia";
import { useLocalStorage, type RemovableRef } from "@vueuse/core";

/**
 * This is an composition api type of store, similar to setup function in vue 3.
 */
export const useAuthStore = defineStore("auth", () => {
    const token: RemovableRef<string> = useLocalStorage("authUser", "");

    return { token };
});
