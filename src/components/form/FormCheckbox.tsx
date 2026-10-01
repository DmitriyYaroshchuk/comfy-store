import {Label} from "@/components/ui/label.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";

type FormCheckboxProps = {
    name: string,
    label?: string,
    defaultValue?: string,
}
function FormCheckbox({ name, label, defaultValue }: FormCheckboxProps) {
    const defaultCheck = defaultValue === 'on';
    return (
        <div className="mb-2 flex justify-between self-end">
            <Label htmlFor={name} className="capitalize">{label || name}</Label>
            <Checkbox id={name} name={name} defaultChecked={defaultCheck}/>
        </div>
    )
}
export default FormCheckbox;