import Link from "next/link";
import Image from "next/image";

export function Logo() {
    return (
        <Link href="/" className="flex flex-col items-center">
            <Image
                src="/logo.png"
                alt="Easy Tour Logo"
                width={70}
                height={93}
                className="object-contain w-5 md:w-10 h-auto"
                priority
            />
            <div className="flex flex-col items-center -mt-2">
                <span className="text-white font-display text-xs">Easy</span>
                <span className="text-primary font-display text-sm md:text-lg font-bold -mt-1 md:-mt-2">Tour</span>
            </div>
        </Link>
    );
}
