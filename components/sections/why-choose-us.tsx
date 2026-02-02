import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/features";

export function WhyChooseUs() {
    return (
        <section className="relative w-full py-10 bg-linear-to-b from-primary/20 to-primary/60 flex items-center">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <Card key={feature.title} className="bg-white/30 border-none shadow-none rounded-3xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <div className="w-12 h-12 mb-4 text-primary">
                                    <feature.icon className="w-full h-full stroke-[1.5]" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-base md:text-lg max-w-44 leading-tight font-sans">
                                    {feature.title}
                                </h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
