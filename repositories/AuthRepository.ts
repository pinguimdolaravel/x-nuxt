import type { User } from "~/actions/auth/fetchUser";
import type { LoginForm } from "~/actions/auth/login";

const AuthRepository = {
    async login(form: LoginForm) {
        await usePost('/login');
        this.fetchUser();
    },

    async fetchUser() {
        const user = await useGet('/user');
        useAuthStore().setUser(user.data.value as User);
    },

    async logout() {
        await usePost('/logout');
        useAuthStore().setUser(null);
    }
}

export default AuthRepository;
