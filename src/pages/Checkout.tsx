import {useAppSelector} from "@/engine/hooks/hooks.tsx";
import SectionTitle from "@/components/SectionTitle.tsx";
import CheckoutForm from "@/components/CheckoutForm.tsx";
import CartTotals from "@/components/cart/CartTotals.tsx";

function Checkout() {
    const cartTotal = useAppSelector((state) => state.cartState.cartTotal);
    if (cartTotal === 0) {
        return <SectionTitle text='Your cart is empty' />
    }
    return (
        <>
            <SectionTitle text='Place your order'/>
            <div className='mt-8 grid gap-8 md:grid-cols-2 items-start'>
                <CheckoutForm/>
                <CartTotals/>
            </div>
        </>
    )
}
export default Checkout;