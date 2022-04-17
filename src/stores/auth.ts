import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useAuthStore = defineStore("auth", () => {
    const token = useLocalStorage("authUser", "");

    return { token };
});
