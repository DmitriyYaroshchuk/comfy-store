import {Link, useLoaderData} from "react-router-dom";
import type {CartItem, SingleProductResponse} from "@/utils";
import formatAsDollars from "@/utils/formatAsDollars.ts";
import {useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import SelectProductColor from "@/components/product/SelectProductColor.tsx";
import SelectProductAmount from "@/components/product/SelectProductAmount.tsx";
import {Mode} from "@/components/product/mode.ts";
import {useAppDispatch} from "@/engine/hooks/hooks.tsx";
import {addItem} from "@/features/cart/cartSlice.ts";

function SingleProduct() {
    const { data: product } = useLoaderData() as SingleProductResponse;
    const { image, title, price, description, colors, company } = product.attributes;
    const dollarsAmount = formatAsDollars(price);
    const [productColor, setProductColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);
    const dispatch = useAppDispatch();
    const cartProduct: CartItem = {
        cartId: product.id + productColor,
        productId: product.id,
        image,
        title,
        price,
        amount,
        productColor,
        company
    }
    const addToCart = () => {
        dispatch(addItem(cartProduct));
    }
    return (
        <section>
            <div className="flex gap-x-2 h-6 items-center">
                <Button asChild variant='link' size='sm'>
                    <Link to='/'>Home</Link>
                </Button>

                <Button asChild variant='link' size='sm'>
                    <Link to='/products'>Products</Link>
                </Button>
            </div>
            <Separator/>
            <div className="grid mt-6 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
                <img className="w-96 h-96 object-cover rounded-lg lg:w-full" src={image} alt={title} />
                <div>
                    <h1 className="capitalize text-3xl font-bold">{title}</h1>
                    <h4 className="text-xl mt-2">{company}</h4>
                    <p className="mt-3 text-md inline-block p-2 rounded-md bg-muted">{dollarsAmount}</p>
                    <p className="mt-6 leading-8">{description}</p>
                    <SelectProductColor colors={colors} productColor={productColor} setProductColor={setProductColor}/>
                    <SelectProductAmount mode={Mode.SingleProduct} amount={amount} setAmount={setAmount}/>
                    <Button size='lg' className="mt-10" onClick={addToCart}>Add to bag</Button>
                </div>
            </div>
        </section>
    )
}
export default SingleProduct;