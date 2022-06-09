import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "@/assets/index.css";
import { createI18n } from "@/i18n";
import { configAxios } from "./utils/axiosConfig";
import { plugin, defaultConfig } from "@formkit/vue";
import config from "../formkit.config";
import "./utils/consoleLog";

const app = createApp(App);
const i18n = createI18n();

configAxios();

app.use(i18n);
app.use(createPinia());
app.use(router);
app.use(plugin, defaultConfig(config));

app.mount("#app");
