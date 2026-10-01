import {type ActionFunction, redirect} from "react-router-dom";
import {customFetch} from "@/utils/customFetch.ts";
import type {AxiosResponse} from "axios";
import type {ReduxStore} from "@/engine/store/store.tsx";
import {loginUser} from "@/features/user/userSlice.ts";
import {toast} from "sonner";

export const action = (store: ReduxStore) : ActionFunction =>  async ({request}): Promise<Response | null> => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        const response: AxiosResponse = await customFetch.post('/auth/local', data);
        const username = response.data.user.username;
        const jwt = response.data.jwt;
        store.dispatch(loginUser({username, jwt}));
        return redirect('/');
    } catch (error) {
        console.error(error);
        toast("Login failed.");
        return null;
    }

}