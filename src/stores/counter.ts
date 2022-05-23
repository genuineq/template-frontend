import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useCounterStore = defineStore({
    id: "counter",
    state: () =>
        useLocalStorage("counterStore", {
            counter: 2,
            ability: 4,
        }),
    getters: {
        doubleCount: (state) => state.counter * 2,
    },
    actions: {
        increment() {
            this.counter++;
        },
    },
});
