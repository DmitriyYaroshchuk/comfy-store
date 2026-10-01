import Logo from "@/components/Logo.tsx";
import LinksDropdown from "@/components/LinksDropdown.tsx";
import NavLinks from "@/components/NavLinks.tsx";
import ModeToggle from "@/components/ModeToggle.tsx";
import CartButton from "@/components/CartButton.tsx";

function Navbar() {
    return (
        <nav className='bg-muted py-4'>
            <div className='align-element flex justify-between items-center'>
                <Logo/>
                <LinksDropdown/>
                <NavLinks/>
                <div className='flex justify-center items-center gap-x-4'>
                    <ModeToggle/>
                    <CartButton/>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;