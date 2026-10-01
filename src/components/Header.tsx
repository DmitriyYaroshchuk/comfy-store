import {Button} from "@/components/ui/button.tsx";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "@/engine/hooks/hooks.tsx";
import {clearCart} from "@/features/cart/cartSlice.ts";
import {logoutUser} from "@/features/user/userSlice.ts";
import {toast} from "sonner";

function Header() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.userState.user);
    const handleLogout = () => {
        dispatch(clearCart());
        dispatch(logoutUser());
        toast('Logout successfully.');
        navigate("/");
    }
    return (
        <header>
            <div className='align-element flex justify-center sm:justify-end py-2'>
                {
                    user
                        ? (<div className='flex gap-x-2 sm:gap-x-8 items-center'>
                            <p className='text-xs sm:text:sm'>Hello, {user.username}</p>
                            <Button variant='link' size='sm' onClick={handleLogout}>
                                Logout
                            </Button>
                        </div>)
                        : <div className='flex gap-x-6 justify-center items-center mr-4'>
                            <Button asChild variant='link' size='sm'>
                                <Link to='/login'>Sign in / Guest</Link>
                            </Button>
                            <Button asChild variant='link' size='sm'>
                                <Link to='/register'>Register</Link>
                            </Button>
                        </div>
                }
            </div>
        </header>)
}
export default Header;