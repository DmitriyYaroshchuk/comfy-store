import {isRouteErrorResponse, Link, useRouteError} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";

function Error() {
    // useRouteError returns whatever was thrown inside a loader, action, or component.
    // It can be a Response object, a JS Error, a string, or anything else.
    const error = useRouteError();
    console.error(error);

    // isRouteErrorResponse checks if the error is an HTTP-like Response object
    // with status, statusText, and data fields (e.g. thrown via: throw new Response('Not Found', { status: 404 }))
    // Without this guard, TypeScript doesn't know that error.status exists
    if (isRouteErrorResponse(error) && error.status === 404) {
        return (
            <main className='grid min-h-[100vh] place-items-center px-8'>
                <div className='text-center'>
                    <p className='text-9xl font-semibold text-primary'>404</p>
                    <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>
                        Page Not Found
                    </h1>
                    <p className='mt-6 text-lg leading-7'>
                        Sorry, we could not find the page you are looking for.
                    </p>
                    <div className='mt-10'>
                        <Button asChild size='lg' variant='secondary'>
                            <Link to='/'>Go back home</Link>
                        </Button>
                    </div>
                </div>
            </main>
        )
    }

    // Fallback for any other type of error (JS Error, string, unexpected crash, etc.)
    return (
        <main className='grid min-h-[100vh] place-items-center px-8'>
            <h4 className='text-center font-bold text-4xl'>there was an error...</h4>
        </main>
    );
}
export default Error;