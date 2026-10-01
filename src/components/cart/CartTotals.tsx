import formatAsDollars from "@/utils/formatAsDollars.ts";
import {Separator} from "@/components/ui/separator.tsx";
import {useAppSelector} from "@/engine/hooks/hooks.tsx";
import {Card, CardTitle} from "@/components/ui/card.tsx";

function CartTotals() {
    const { cartTotal, shipping, tax, orderTotal } = useAppSelector((state) => state.cartState);
    return (
        <Card className="p-8 bg-muted">
            <CartTotalRow label="Subtotal" amount={cartTotal}/>
            <CartTotalRow label="Shipping" amount={shipping}/>
            <CartTotalRow label="Tax" amount={tax}/>
            <CardTitle className="mt-4">
                <CartTotalRow label="Order Total" amount={orderTotal} lastRow/>
            </CardTitle>
        </Card>
    )
}

function CartTotalRow({ label, amount, lastRow } : { label: string, amount: number, lastRow?: boolean }) {
    return (
        <div>
            <p className={`flex justify-between ${lastRow ? 'font-medium text-lg' : 'font-normal text-sm'}`}>
                <span>{label}</span>
                <span>{formatAsDollars(amount)}</span>
            </p>
            { lastRow ? null : <Separator className="my-0.5"/> }
        </div>

    )
}
export default CartTotals;