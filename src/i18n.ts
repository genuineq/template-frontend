import { createI18n as _createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import ro from "@/locales/ro.json";

export function createI18n() {
    return _createI18n({
        legacy: false,
        globalInjection: true,
        /** Initialize the locale based on the browser language setting. */
        locale: navigator.language,
        fallbackLocale: "en",
        messages: {
            en,
            ro,
        },
    });
}
