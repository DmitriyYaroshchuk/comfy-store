import {type LoaderFunction, redirect} from "react-router-dom";
import type {ReduxStore} from "@/engine/store/store.tsx";
import type {OrdersResponse} from "@/utils/types.ts";
import {toast} from "sonner";
import {customFetch} from "@/utils/customFetch.ts";

export const loader = (store: ReduxStore): LoaderFunction => async ({request}): Promise<OrdersResponse | Response | null> => {
    const user = store.getState().userState.user;
    if (!user) {
        toast('Please login to continue');
        return redirect('/login')
    }
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
    try {
        const response = await customFetch.get<OrdersResponse>('/orders', {
            params,
            headers: {
                Authorization: `Bearer ${user.jwt}`
            }
        });
        return {
            ...response.data,
        }

    } catch (error) {
        console.error(error);
        toast('Failed to fetch orders');
        return null;
    }
}