function About() {
    return (
        <section>
            <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl'>
                We love <span className='bg-primary py-2 px-4 rounded-lg tracking-wide text-white'>comfy</span>
            </h1>
            <p className='mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto'>
                Comfy Store is a demo furniture shop where good design meets everyday comfort. Browse chairs, sofas, beds and tables from trusted brands, filter by category, company and price, and get your favorites delivered to your door.
            </p>
        </section>
    );
}
export default About;