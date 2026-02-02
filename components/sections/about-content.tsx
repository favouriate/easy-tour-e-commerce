import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AboutContent() {
    return (
        <section className="relative w-full h-96 flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/bg-image.png"
                    alt="Mountain Landscape"
                    fill
                    className="object-cover brightness-50"
                    sizes="100vw"
                />
            </div>

            <div className="container mx-auto px-4 text-center z-10 max-w-4xl">
                <h2 className="font-display text-3xl md:text-4xl text-white font-normal mb-4">
                    Our team cares about your full relax
                </h2>

                <p className="text-white/90 text-sm font-sans max-w-2xl mx-auto mb-8 leading-relaxed px-4">
                    But I must explain to you how all this mistaken idea of denouncing pleasure and
                    praising pain was born and I will give you a complete account of the system, and
                    expound the actual teachings of the great explorer of the truth, the master-builder
                    of human happiness.
                </p>

                <Button
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white hover:text-primary rounded-full px-8 py-6 text-base transition-all"
                >
                    View our Tour Packages
                </Button>
            </div>
        </section>
    );
}
