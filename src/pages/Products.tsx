import Filters from "@/components/Filters.tsx";
import ProductsContainer from "@/components/ProductsContainer.tsx";
import PaginationContainer from "@/components/PaginationContainer.tsx";

function Products() {
    return (
        <>
            <Filters/>
            <ProductsContainer/>
            <PaginationContainer/>
        </>

    )
}
export default Products;