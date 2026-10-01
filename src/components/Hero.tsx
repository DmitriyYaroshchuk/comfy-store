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
                <p className='mt-8 max-w-xl text-lg leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <Button asChild size='lg' className='mt-10 rounded-md text-xl'>
                    <Link to='/products'>Our Products</Link>
                </Button>
            </div>
            <HeroCarousel/>
        </section>
    )
}
export default Hero;