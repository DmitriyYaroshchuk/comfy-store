import {useLoaderData} from "react-router-dom";
import type {OrdersResponse} from "@/utils";
import SectionTitle from "@/components/SectionTitle.tsx";
import OrdersList from "@/components/orders/OrdersList.tsx";
import ComplexPaginationContainer from "@/components/ComplexPaginationContainer.tsx";

function Orders() {
    const { meta } = useLoaderData() as OrdersResponse;
    if (meta.pagination.total < 1) {
        return <SectionTitle text="Please make an order"/>
    }
    return (
        <>
            <SectionTitle text='Your Orders'/>
            <OrdersList/>
            <ComplexPaginationContainer/>
        </>
    )
}
export default Orders;