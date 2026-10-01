import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";

type FormInputProps = {
    name: string;
    type: string;
    label?: string;
    defaultValue?: string;
}
function FormInput({ label, name, type, defaultValue } : FormInputProps) {
    return (
        <div className="mb-4">
            <Label className="capitalize mb-2 font-normal text-base" htmlFor={name}>{label || name}</Label>
            <Input id={name} name={name} type={type} defaultValue={defaultValue}/>
        </div>
    )
}
export default FormInput;