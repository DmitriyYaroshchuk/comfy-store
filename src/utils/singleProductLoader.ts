import type {LoaderFunction} from "react-router-dom";
import type {SingleProductResponse} from "@/utils/types.ts";
import {customFetch} from "@/utils/customFetch.ts";

export const loader : LoaderFunction = async ({ params }): Promise<SingleProductResponse> => {
    const res = await customFetch<SingleProductResponse>(`/products/${params.id}`);
    return {...res.data}
}