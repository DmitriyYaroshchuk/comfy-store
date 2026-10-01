import {Form, Link, useLoaderData} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import type {ProductsResponseWithParams} from "@/utils";
import FormInput from "@/components/form/FormInput.tsx";
import FormSelect from "@/components/form/FormSelect.tsx";
import FormRange from "@/components/form/FormRange.tsx";
import FormCheckbox from "@/components/form/FormCheckbox.tsx";

function Filters() {
    const { data, params, meta } = useLoaderData() as ProductsResponseWithParams;
    const { search, category, company, order, price, shipping } = params;
    const maxPrice = Math.max(...data.map((item) => Number(item.attributes.price)));
    return (
        <Form className="border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch">
            <FormInput name="search" type="search" label="search product" defaultValue={search}/>
            <FormSelect label="select category" name="category" options={meta.categories} defaultValue={category}/>
            <FormSelect label="select company" name="company" options={meta.companies} defaultValue={company}/>
            <FormSelect label="order by" name="order" options={['a-z', 'z-a', 'high', 'low']} defaultValue={order}/>
            <FormRange label="price" name="price" maxPrice={maxPrice} defaultValue={price}/>
            <FormCheckbox label="free shipping" name="shipping" defaultValue={shipping}/>
            <Button type="submit" size="sm" className="self-end">Search</Button>
            <Button type="button" asChild size="sm" variant="outline" className="self-end">
                <Link to='/products'>Reset</Link>
            </Button>
        </Form>
    )
}
export default Filters;