import SectionTitle from "@/components/SectionTitle.tsx";
import ProductsGrid from "@/components/ProductsGrid.tsx";

function FeaturedProducts() {
    return (
        <section className="pt-24">
            <SectionTitle text='featured products'/>
            <ProductsGrid/>
        </section>
    )
}
export default FeaturedProducts;