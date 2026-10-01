import {type ActionFunction, redirect} from "react-router-dom";
import {customFetch} from "@/utils/customFetch.ts";
import {toast} from "sonner";
import {AxiosError} from "axios";

export const action: ActionFunction = async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await customFetch.post('/auth/local/register', data);
        toast('Register successfully registered!');
        return redirect('/login');
    } catch (error) {
        const errorMessage = error instanceof AxiosError ? error.response?.data.error.message : 'Registration failed';
        toast(`${errorMessage}`);
        return null;
    }
}