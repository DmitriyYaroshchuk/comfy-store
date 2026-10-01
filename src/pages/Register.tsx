import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Form, Link} from "react-router-dom";
import FormInput from "@/components/form/FormInput.tsx";
import {Button} from "@/components/ui/button.tsx";
import SubmitButton from "@/components/SubmitButton.tsx";
function Register() {
    return (
        <section className="h-screen grid place-items-center">
            <Card className='max-w-96 w-full bg-muted'>
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-semibold">Register</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form method='POST'>
                        <FormInput name="username" type="text"/>
                        <FormInput name="email" type="email"/>
                        <FormInput name="password" type="password"/>
                        <SubmitButton text="Register" className="w-full mt-4"/>
                        <p className='text-center mt-4'>
                            Already a member ?
                            <Button type='button' asChild variant='link'>
                                <Link to='/login'>Login</Link>
                            </Button>
                        </p>
                    </Form>
                </CardContent>
            </Card>
        </section>
    )
}
export default Register;