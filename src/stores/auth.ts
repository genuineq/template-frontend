import { defineStore } from "pinia";
import { ref } from "vue";
import { useLocalStorage, type RemovableRef } from "@vueuse/core";

export const useAuthStore = defineStore("auth", () => {
    const token = ref(useLocalStorage("authUser", ""));

    return { token };
});
