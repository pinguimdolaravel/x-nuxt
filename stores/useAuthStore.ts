import type {User} from "~/types/user";

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null);
    const isLoggedIn = computed(() => !!user.value)

    async function fetchUser() {
        const response = await useApi('/api/user');

        user.value = response.data.value as User;
    }

    async function login(form: any) {

        await useApi('/sanctum/csrf-cookie');

        const response = await useApi('/login', {
            method: 'POST',
            body: form
        });

        await fetchUser();

        return response;
    }

    async function logout() {
        await useApi('/sanctum/csrf-cookie');
        await useApi('/logout', { method: 'POST' });
        user.value = null;
    }


    return {login, user, isLoggedIn, fetchUser, logout};
})
