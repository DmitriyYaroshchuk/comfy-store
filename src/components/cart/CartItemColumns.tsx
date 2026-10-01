import formatAsDollars from "@/utils/formatAsDollars.ts";
import {Button} from "@/components/ui/button.tsx";
import {useAppDispatch} from "@/engine/hooks/hooks.tsx";
import {editItem, removeItem} from "@/features/cart/cartSlice.ts";
import SelectProductAmount from "@/components/product/SelectProductAmount.tsx";
import {Mode} from "@/components/product/mode.ts";

export const FirstColumn = ({ title, image } : { title: string, image: string }) => {
    return <img src={image} alt={title} className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"/>
}
export const SecondColumn = ({ title, company, productColor } : { title: string, company: string, productColor: string }) => {
    return (
        <div className='sm:ml-4 md:ml-12 sm:w-48'>
            <h3 className="capitalize text-lg font-medium">{title}</h3>
            <h4 className="mt-2 capitalize text-sm">{company}</h4>
            <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
                color: <span style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: `${productColor}` }}></span>
            </p>
        </div>
    )
}
export const ThirdColumn = ({amount, cartId}: { amount: number, cartId: string }) => {
    const dispatch = useAppDispatch();
    const removeItemFromCart = () => {
        dispatch(removeItem(cartId))
    }
    const setAmount = (value: number) => {
        dispatch(editItem({cartId, amount: value}))
    }
    return (
        <div className="min-w-32">
            <SelectProductAmount mode={Mode.CartItem} amount={amount} setAmount={setAmount}/>
            <Button variant="link" className="-ml-4 cursor-pointer" onClick={removeItemFromCart}>Remove</Button>
        </div>
    )
}
export const FourthColumn = ({price}: {price: string}) => {
    return <p className="font-medium text-lg sm:ml-auto">{formatAsDollars(price)}</p>
}