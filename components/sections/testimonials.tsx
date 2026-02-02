"use client";

import { useRef } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );

    return (
        <section className="py-8 bg-white relative">
            <div className="container mx-auto px-4 max-w-screen-2xl">
                <div className="flex justify-between items-end mb-8 px-4 max-w-7xl mx-auto">
                    <h2 className="font-display text-2xl font-bold text-gray-900 tracking-tight">Happy Customers Says</h2>
                </div>

                <div className="w-full max-w-7xl mx-auto px-12">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full"
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            {testimonials.map((item) => (
                                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1 h-full">
                                        <Card className="bg-white rounded-3xl border border-gray-100 shadow-sm relative group hover:shadow-lg transition-all h-full">
                                            <CardContent className="p-8 flex flex-col items-center text-center h-full">
                                                <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden border-4 border-gray-50 shrink-0">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                        sizes="64px"
                                                    />
                                                </div>
                                                <h4 className="font-bold text-lg mb-4 text-gray-900">{item.name}</h4>

                                                <div className="relative flex-1">
                                                    <Quote className="absolute -top-4 -left-4 w-6 h-6 text-primary/30 fill-primary/30 -z-10 rotate-180" />
                                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base italic relative z-10 line-clamp-4">
                                                        {item.text}
                                                    </p>
                                                    <Quote className="absolute -bottom-4 -right-4 w-6 h-6 text-primary/30 fill-primary/30 -z-10" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
