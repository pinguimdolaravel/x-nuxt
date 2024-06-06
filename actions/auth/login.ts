import actions from "..";

export interface LoginForm {
    email: string;
    password: string;
}

export async function login(form: LoginForm) {
    await usePost('/login', {body: form});
    await actions.auth.fetchUser();
}
