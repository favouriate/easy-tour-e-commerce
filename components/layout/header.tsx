"use client";

import Link from "next/link";
import { Logo } from "../logo";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/data/navigation";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 bg-transparent text-white">
            {/* Logo Section */}
            <Logo />

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 font-sans">
                {NAV_LINKS.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-base font-semibold hover:text-primary transition-colors"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            {/* Right Action Section */}
            <div className="hidden md:flex items-center gap-6 font-sans">
                {/* Language Selector */}
                <button className="flex items-center gap-1 text-base font-semibold hover:text-primary transition-colors">
                    Eng <ChevronDown className="w-4 h-4" />
                </button>

                {/* Login Link */}
                <Link href="/login" className="text-base font-semibold hover:text-primary transition-colors">
                    Login
                </Link>

                {/* Sign Up Button */}
                <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 py-2 h-10 text-base font-semibold shadow-lg transition-transform hover:scale-105"
                >
                    Sign Up
                </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                            <span className="sr-only">Open menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-72 bg-white border-none">
                        <div className="flex flex-col gap-8 mt-8">
                            {/* Mobile Nav Links */}
                            <nav className="flex flex-col gap-4">
                                {NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            <div className="h-px bg-gray-100" />

                            <div className="flex flex-col gap-4">
                                <button className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                                    Eng <ChevronDown className="w-4 h-4" />
                                </button>
                                <Link href="/login" className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                                    Login
                                </Link>
                                <Button
                                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full"
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
