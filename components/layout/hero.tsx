import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-20 lg:pt-0 lg:pb-0">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/bg-image.png"
                    alt="Travel Landscape"
                    fill
                    className="object-cover"
                    priority
                    quality={75}
                    sizes="100vw"
                />
                {/* Overlay for text contrast */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/60" />
            </div>

            <div className="container mx-auto px-4 flex flex-col items-center z-10">
                {/* Typography */}
                <div className="text-center mb-12 lg:mb-24 space-y-4">
                    <h1 className="font-display text-2xl md:text-4xl lg:text-6xl leading-tight text-white drop-shadow-lg italic px-4">
                        Enjoy in the best way!
                    </h1>
                    <p className="font-sans text-base md:text-xl text-white font-bold drop-shadow-md px-4">
                        Enjoy our services for your trip anytime
                    </p>
                </div>
            </div>
        </section>
    );
}
