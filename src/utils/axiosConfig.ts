import axios from "axios";
import { useAuthStore } from "@/stores/auth";

export function configAxios() {
    axios.defaults.baseURL = "http://template-backend.test/api";

    axios.interceptors.request.use(function (config) {
        /**
         * If there is a token, use that token for the authenticated request
         */
        const auth = useAuthStore();
        if (auth.token !== "") {
            if (!config?.headers) {
                throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
            }
            config.headers.Authorization = `Bearer ${auth.token}`;
        }
        return config;
    });
}
