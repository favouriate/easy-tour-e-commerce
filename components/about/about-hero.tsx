import Image from "next/image";

export function AboutHero() {
    return (
        <section className="relative h-[600px] w-full flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/julia-solonina-Csja8O0sbOw-unsplash 1 (2).png"
                    alt="Travel Landscape Mountains"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="container mx-auto px-4 text-center text-white z-10 pt-20">
                <span className="font-script text-4xl md:text-6xl mb-6 block mx-auto leading-tight">
                    Our team cares about your full relax
                </span>
                <p className="font-sans text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed opacity-90">
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                </p>

                <button className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all font-sans text-lg">
                    View our Tour Packages
                </button>
            </div>
        </section>
    );
}
