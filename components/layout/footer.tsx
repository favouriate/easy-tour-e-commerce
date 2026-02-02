"use client";

import Link from "next/link";
import { Logo } from "../logo";
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";

export function Footer() {
    return (
        <footer className="bg-footer text-white py-6 lg:py-8 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-6">

                    {/* Column 1: Logo & Socials */}
                    <div className="col-span-2 md:col-span-1 flex flex-col items-start md:items-center lg:items-start space-y-4">
                        <Logo />
                        <div className="flex items-center gap-4">
                            <a href="#" aria-label="Visit our Twitter page" className="w-8 h-8 rounded-full bg-primary hover:bg-orange-600 flex items-center justify-center text-black transition-colors">
                                <Twitter className="w-4 h-4 fill-current" />
                            </a>
                            <a href="#" aria-label="Visit our Facebook page" className="w-8 h-8 rounded-full bg-primary hover:bg-orange-600 flex items-center justify-center text-black transition-colors">
                                <Facebook className="w-4 h-4 fill-current" />
                            </a>
                            <a href="#" aria-label="Visit our Instagram page" className="w-8 h-8 rounded-full bg-primary hover:bg-orange-600 flex items-center justify-center text-black transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg font-sans">Services</h3>
                        <ul className="space-y-3 text-gray-300 font-sans text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">Bike and Rickshaw rental</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Guided Tours of Lucca</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Guided Bike Tour of Lucca</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Trip In The Tuscan Hills</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Transportation With Luxury Cars</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Wine Tours By Bus With Guide</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Home */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg font-sans">Home</h3>
                        <ul className="space-y-3 text-gray-300 font-sans text-sm">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Help */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg font-sans">Help</h3>
                        <ul className="space-y-3 text-gray-300 font-sans text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Use</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Contacts */}
                    <div className="space-y-4 lg:col-span-1">
                        <h3 className="font-bold text-lg font-sans">Contacts</h3>
                        <ul className="space-y-3 text-gray-300 font-sans text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>Piazza Napoleone, Lucca, Tuscany</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+39 346 368 5708</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>easytour@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
