import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "@/assets/index.css";
import { createI18n } from "@/i18n";
import { configAxios } from "./utils/axiosConfig";
import { plugin, defaultConfig } from "@formkit/vue";
import { generateClasses } from "@formkit/themes";
import { config } from "@/theme";

const app = createApp(App);
const i18n = createI18n();

configAxios();

app.use(i18n);
app.use(createPinia());
app.use(router);
app.use(
    plugin,
    defaultConfig({
        config: {
            classes: generateClasses(config),
        },
    })
);

app.mount("#app");
