import {Form} from "react-router-dom";
import FormInput from "@/components/form/FormInput.tsx";
import SubmitButton from "@/components/SubmitButton.tsx";

function CheckoutForm() {
    return (
        <Form method='post' className="flex flex-col gap-y-4">
            <h4 className="font-medium text-xl mb-4">Shipping Information</h4>
            <FormInput label="first name" name="name" type="text"/>
            <FormInput label="address" name="address" type="text"/>
            <SubmitButton text="Place Your Order" className="mt-4"/>
        </Form>
    )
}
export default CheckoutForm;