import axios, { type AxiosInstance } from "axios";
import { useAuthStore } from "@/stores/auth";
import { PostsApi } from "typescript-axios";

export const axiosInstance: AxiosInstance = axios.create();

axiosInstance.defaults.baseURL = import.meta.env.VITE_API_URL;

axiosInstance.interceptors.request.use(function (config) {
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

export const apiService = new PostsApi(
    undefined,
    "https://jsonplaceholder.typicode.com", //import.meta.env.VITE_API_URL
    axiosInstance
);

// export function configAxios() {
//     axios.defaults.baseURL = import.meta.env.VITE_API_URL;

//     axios.interceptors.request.use(function (config) {
//         /**
//          * If there is a token, use that token for the authenticated request
//          */
//         const auth = useAuthStore();
//         if (auth.token !== "") {
//             if (!config?.headers) {
//                 throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
//             }
//             config.headers.Authorization = `Bearer ${auth.token}`;
//         }
//         return config;
//     });
// }
