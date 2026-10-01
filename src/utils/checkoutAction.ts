import type {ReduxStore} from "@/engine/store/store.tsx";
import {type ActionFunction, redirect} from "react-router-dom";
import {toast} from "sonner";
import type {Checkout} from "@/utils/types.ts";
import formatAsDollars from "@/utils/formatAsDollars.ts";
import {customFetch} from "@/utils/customFetch.ts";
import {clearCart} from "@/features/cart/cartSlice.ts";

export const action = (store: ReduxStore): ActionFunction => async ({request}) : Promise<null | Response> => {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;

    if(!name || !address) {
        toast('Please fill out all fields');
        return null;
    }

    const user = store.getState().userState.user;
    if(!user) {
        toast('Please login to place an order');
        return redirect('/login');
    }

    const { cartItems, orderTotal, numItemsInCart } = store.getState().cartState;
    const info: Checkout = {
        name,
        address,
        chargeTotal: orderTotal,
        orderTotal: formatAsDollars(orderTotal),
        cartItems,
        numItemsInCart
    }

    try {
         await customFetch.post('/orders', {data: info}, {
            headers: {
                Authorization: `Bearer ${user.jwt}`
            }
        });
         store.dispatch(clearCart());
         toast('Order placed');
         return redirect(`/orders`);
    } catch {
        toast('Order failed');
        return null;
    }
}