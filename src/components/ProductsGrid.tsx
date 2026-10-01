import {Link, useLoaderData} from "react-router-dom";
import type {ProductsResponse} from "@/utils";
import formatAsDollars from "@/utils/formatAsDollars.ts";
import {Card, CardContent} from "@/components/ui/card.tsx";

function ProductsGrid() {
    const {data : products} = useLoaderData() as ProductsResponse;
    return (
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {
                products.map((product) => {
                    const {id} = product;
                    const {title, price, image} = product.attributes;
                    const dollarsAmount = formatAsDollars(price);
                    return (
                        <Link to={`/products/${id}`} key={id}>
                            <Card>
                                <CardContent className='pt-4'>
                                    <img className='rounded-md h-64 md:h-48 w-full object-cover' src={image} alt={title}/>
                                    <div className='mt-4 text-center'>
                                        <h2 className="text-xl font-semibold capitalize">{title}</h2>
                                        <p className='text-primary font-light text-xl mt-2'>{dollarsAmount}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>)
                })
            }
        </div>
    )
}
export default ProductsGrid;