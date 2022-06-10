import { useAxios } from "@vueuse/integrations/useAxios";

type Method = "GET" | "POST" | "PUT" | "DELETE";

export const http = async (method: Method, route: string, dataObject = {}) => {
    const { data, error } = await useAxios(route, {
        method: method,
        data: dataObject,
    });

    return { data, error };
};
