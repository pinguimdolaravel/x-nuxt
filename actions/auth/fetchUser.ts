
export interface User {
    id: number;
    name: string;
    email: string;
}

export async function fetchUser() {
    const user = await useGet('/api/user');
    useAuthStore().setUser(user.data.value as User);
}
