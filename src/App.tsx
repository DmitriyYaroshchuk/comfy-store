import {
    HomeLayout,
    Landing,
    Products,
    SingleProduct,
    Cart,
    About,
    Register,
    Login,
    Checkout,
    Orders
} from "@/pages";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "@/pages/Error.tsx";
import ErrorElement from "@/components/ErrorElement.tsx";

import { loader as landingLoader } from '@/utils/landingLoader.ts';
import { loader as productsLoader } from '@/utils/productsLoader.ts';
import { loader as singleProductLoader } from '@/utils/singleProductLoader.ts';
import { loader as checkoutLoader } from '@/utils/checkoutLoader.ts';
import { loader as ordersLoader } from '@/utils/ordersLoader.ts';

import { action as registerUser } from '@/utils/registerAction.ts';
import { action as loginUser } from '@/utils/loginAction.ts';
import { action as checkoutAction } from '@/utils/checkoutAction.ts';
import {store} from "@/engine/store/store.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Landing/>,
                errorElement: <ErrorElement/>,
                loader: landingLoader
            },
            {
                path: 'products',
                element: <Products/>,
                errorElement: <ErrorElement/>,
                loader: productsLoader
            },
            {
                path: 'products/:id',
                element: <SingleProduct/>,
                errorElement: <ErrorElement/>,
                loader: singleProductLoader
            },
            {
                path: 'cart',
                element: <Cart/>,
                errorElement: <ErrorElement/>
            },
            {
                path: 'about',
                element: <About/>,
                errorElement: <ErrorElement/>
            },
            {
                path: 'checkout',
                element: <Checkout/>,
                errorElement: <ErrorElement/>,
                loader: checkoutLoader(store),
                action: checkoutAction(store)
            },
            {
                path: 'orders',
                element: <Orders/>,
                errorElement: <ErrorElement/>,
                loader: ordersLoader(store)
            }
        ],

    },
    {
        path: '/login',
        element: <Login/>,
        errorElement: <Error/>,
        action: loginUser(store)
    },
    {
        path: '/register',
        element: <Register/>,
        errorElement: <Error/>,
        action: registerUser
    }
], { basename: import.meta.env.BASE_URL });
function App() {

    return (
        <RouterProvider router={router}/>
    )
}

export default App