import type {LoaderFunction} from "react-router-dom";
import {customFetch} from "@/utils/customFetch.ts";
import type {ProductsResponse} from "@/utils/types.ts";

const url = '/products?featured=true';
export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
    const response = await customFetch<ProductsResponse>(url);
    return {
        ...response.data
    };
}