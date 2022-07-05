import { useAxios } from "@vueuse/integrations/useAxios";
import { axiosInstance } from "./axiosConfig";

type Method = "GET" | "POST" | "PUT" | "DELETE";

/**
 * Http wrapper for the network service in case we want to change
 * the underlying technology (in this case axios)
 * @param { Method }  method the method for the call Post, Put, Get, Delete
 * @param {string} route the route for the call, should be only the resource as the base url is already configured
 * @param {object} dataObject object for sending data to the server.
 * @returns
 */
export const http = async (method: Method, route: string, dataObject = {}) => {
    const { data, error, isLoading, isFinished } = await useAxios(
        route,
        {
            method: method,
            data: dataObject,
        },
        axiosInstance
    );

    return { data, error, isLoading, isFinished };
};
