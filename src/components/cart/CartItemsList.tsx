import {useAppSelector} from "@/engine/hooks/hooks.tsx";
import {Card} from "@/components/ui/card.tsx";
import {FirstColumn, FourthColumn, SecondColumn, ThirdColumn} from "@/components/cart/CartItemColumns.tsx";

function CartItemsList() {
    const cartItems = useAppSelector((state) => state.cartState.cartItems);
    return (
        <div>
            {
                cartItems.map((item) => {
                    const { cartId, title, price, image, amount, company, productColor } = item;
                    return (
                        <Card key={cartId}
                        className="flex flex-col gap-y-4 sm:flex-row flex-wrap p-6 mb-8">
                            <FirstColumn image={image} title={title}/>
                            <SecondColumn title={title} company={company} productColor={productColor}/>
                            <ThirdColumn amount={amount} cartId={cartId}/>
                            <FourthColumn price={price}/>
                        </Card>
                    )
                })
            }
        </div>
    )
}
export default CartItemsList;