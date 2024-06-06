
export async function logout() {
    await usePost('/logout');
    useAuthStore().setUser(null);
}
