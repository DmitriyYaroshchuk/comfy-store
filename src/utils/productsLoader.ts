import type {LoaderFunction} from "react-router-dom";
import type {ProductsResponse, ProductsResponseWithParams} from "@/utils/types.ts";
import {customFetch} from "@/utils/customFetch.ts";

const url = '/products';
export const loader: LoaderFunction = async ({ request }): Promise<ProductsResponseWithParams> => {
    // products?search=chair&category=furniture&company=ikea&order=a-z&price=1000&shipping=true&page=2
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
    const response = await customFetch<ProductsResponse>(url, {
        params
    });
    return  {
        ...response.data, params
    }
}