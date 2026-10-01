import {type LoaderFunction, redirect} from "react-router-dom";
import type {ReduxStore} from "@/engine/store/store.tsx";
import {toast} from "sonner";

export const loader = (store: ReduxStore): LoaderFunction => async (): Promise<Response | null> => {
    const user = store.getState().userState.user;

    if (!user) {
        toast('Please login first');
        return redirect('/login');
    }
    return null;
}