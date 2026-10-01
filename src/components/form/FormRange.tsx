import {useState} from "react";
import {Label} from "@/components/ui/label.tsx";
import formatAsDollars from "@/utils/formatAsDollars.ts";
import {Slider} from "@/components/ui/slider.tsx";


type FormRangeProps = {
    name: string;
    label?: string;
    defaultValue?: string;
    maxPrice: number;
}
function FormRange({ name, label, maxPrice, defaultValue } : FormRangeProps) {
    const step = 1000;

    const defaultPrice = defaultValue ? Number(defaultValue) : maxPrice;
    const [selectedPrice, setSelectedPrice] = useState(defaultPrice);
    return (
        <div className="mb-2">
            <Label htmlFor={name} className="capitalize flex justify-between">
                {label || name}
                <span>{formatAsDollars(selectedPrice)}</span>
            </Label>
            <Slider className="mt-4" id={name} name={name} step={step} max={maxPrice} value={[selectedPrice]} onValueChange={(value) => setSelectedPrice(value[0])}>
            </Slider>
        </div>
    )
}
export default FormRange;