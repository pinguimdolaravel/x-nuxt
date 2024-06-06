import type {UseFetchOptions} from "#app";

function useBaseApi<T>(path: string, options:UseFetchOptions<T> = {}) {
    let headers: any = {};

    const token = useCookie("XSRF-TOKEN");
    if (token.value) {
        headers["X-XSRF-TOKEN"] = token.value as string;
    }

    return useFetch("http://localhost:8000" + path, {
        credentials: "include",
        watch: false,
        ...options,
        headers: {
            ...headers,
            ...options?.headers,
        },
    });
}

export async function useApi<T>(path: string, options: UseFetchOptions<T> = {}) {
    const token = useCookie("XSRF-TOKEN");
    if(!token.value){
        await useBaseApi("/sanctum/csrf-cookie");
    }

    return useBaseApi(path, options);
}

export async function useGet<T>(path: string, options: UseFetchOptions<T> = {}) {
    return await useApi(path, {method: "GET", ...options});
}

export async function usePost<T>(path: string, options: UseFetchOptions<T> = {}) {
    return await useApi(path, {method: "POST", ...options});
}

export function usePut<T>(path: string, options: UseFetchOptions<T> = {}) {
    return useApi(path, {method: "PUT", ...options});
}

export function useDelete<T>(path: string, options: UseFetchOptions<T> = {}) {
    return useApi(path, {method: "DELETE", ...options});
}
