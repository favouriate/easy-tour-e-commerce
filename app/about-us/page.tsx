

import { Testimonials } from "@/components/sections/testimonials";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { RelaxBanner } from "@/components/sections/relax-banner";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <RelaxBanner />
            <WhyChooseUs />
            <Testimonials />
        </main>
    );
}
