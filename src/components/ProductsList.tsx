import {Link, useLoaderData} from "react-router-dom";
import type {ProductsResponse} from "@/utils";
import {Card, CardContent} from "@/components/ui/card.tsx";
import formatAsDollars from "@/utils/formatAsDollars.ts";

function ProductsList() {
    const {data: products} = useLoaderData() as ProductsResponse;
    return(
        <div className="mt-12 grid gap-y-8">
            {
                products.map((product) => {
                    const { title, price, image, company } = product.attributes;
                    const dollarsAmount = formatAsDollars(price);
                    return (
                        <Link key={product.id} to={`/products/${product.id}`}>
                            <Card>
                                <CardContent className='p-8 gap-y-4 grid md:grid-cols-3'>
                                    <img className="h-64 w-full md:h-48 md:w-48 rounded-md object-cover" src={image} alt={title}/>
                                    <div>
                                        <h2 className="text-xl font-semibold capitalize">{title}</h2>
                                        <h4>{company}</h4>
                                    </div>
                                    <p className="text-primary text-xl md:ml-auto">{dollarsAmount}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    )
                })
            }
        </div>
    )
}
export default ProductsList;