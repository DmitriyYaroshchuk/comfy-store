import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import {ShoppingCart} from "lucide-react";
import {useAppSelector} from "@/engine/hooks/hooks.tsx";

function CartButton() {
    const numItemsInCart = useAppSelector((state) => state.cartState.numItemsInCart);
    return (
        <Button
            asChild
            variant='secondary'
            size='icon'
            className='flex justify-center items-center relative rounded-[8px]'>
            <Link to='/cart'>
                <ShoppingCart/>
                <span
                    className='absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs'>
                        {numItemsInCart}
                    </span>
            </Link>
        </Button>
    )
}
export default CartButton;