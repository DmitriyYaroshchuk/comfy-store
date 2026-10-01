import HeroCarousel from "@/components/HeroCarousel.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

function Hero() {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
            <div>
                <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
                    We are changing the way people shop
                </h1>
                <p className='mt-8 max-w-xl text-lg leading-8'>Discover thoughtfully designed furniture for every room. From cozy sofas to ergonomic office chairs, find pieces that make your home more comfortable, with free shipping on selected items.</p>
                <Button asChild size='lg' className='mt-10 rounded-md text-xl'>
                    <Link to='/products'>Our Products</Link>
                </Button>
            </div>
            <HeroCarousel/>
        </section>
    )
}
export default Hero;