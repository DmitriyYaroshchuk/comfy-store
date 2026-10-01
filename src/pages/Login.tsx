import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Form, Link, useNavigate} from "react-router-dom";
import FormInput from "@/components/form/FormInput.tsx";
import SubmitButton from "@/components/SubmitButton.tsx";
import {Button} from "@/components/ui/button.tsx";
import {customFetch} from "@/utils";
import {useAppDispatch} from "@/engine/hooks/hooks.tsx";
import {loginUser} from "@/features/user/userSlice.ts";
import {toast} from "sonner";

function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const loginAsGuestUser = async (): Promise<void> => {
        try {
            const response = await customFetch.post('/auth/local', {
                identifier: 'test@test.com',
                password: 'secret',
            });
            const username = response.data.user.username;
            const jwt = response.data.jwt;
            dispatch(loginUser({ username, jwt }));
            navigate("/");
        } catch {
            toast('Login failed.');
        }
    }
    return (
        <section className="h-screen grid place-items-center">
            <Card className="w-96 bg-muted">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-semibold">Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form method="post">
                        <FormInput label="email" name="identifier" type="email"/>
                        <FormInput name="password" type="password"/>
                        <SubmitButton text="Login" className="w-full mt-4"/>
                        <Button className="w-full mt-4" type="button" variant="outline" onClick={loginAsGuestUser}>Guest User</Button>
                        <p className='text-center mt-4'>
                            Not a member yet?
                            <Button type='button' asChild variant='link'>
                                <Link to='/register'>Register</Link>
                            </Button>
                        </p>
                    </Form>
                </CardContent>
            </Card>
        </section>
    )
}
export default Login;