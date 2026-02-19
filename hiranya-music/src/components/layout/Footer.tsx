import React from 'react';
import Link from 'next/link';
import { Music, Instagram, Youtube, Facebook, Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-card border-t border-gold-primary/10 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 bg-gold-primary rounded-full flex items-center justify-center text-background">
                                <Music size={16} />
                            </div>
                            <span className="text-xl font-serif font-bold text-gold-primary">HIRANYA</span>
                        </Link>
                        <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                            Blending Western Classical elegance with the rich musical heritage of Sri Lanka.
                            Bringing the soul of the violin to every stage.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-background transition-all">
                                <Instagram size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-background transition-all">
                                <Youtube size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-background transition-all">
                                <Facebook size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gold-primary font-serif font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Music', 'Events', 'Lessons'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-foreground/60 hover:text-gold-primary transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-gold-primary font-serif font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3 text-foreground/60 text-sm">
                                <Mail size={16} className="text-gold-primary" />
                                <span>info@hiranyamusic.com</span>
                            </li>
                            <li className="flex items-center space-x-3 text-foreground/60 text-sm">
                                <Phone size={16} className="text-gold-primary" />
                                <span>+94 77 123 4567</span>
                            </li>
                            <li className="mt-4">
                                <Link href="/booking" className="text-gold-primary hover:underline text-sm font-bold">
                                    Book for Events →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter (Simplified) */}
                    <div>
                        <h4 className="text-gold-primary font-serif font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
                        <p className="text-foreground/60 text-sm mb-4">Stay updated with upcoming concerts and new releases.</p>
                        <div className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-background border border-gold-primary/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-gold-primary"
                            />
                            <button className="bg-gold-primary text-background font-bold py-2 rounded-lg text-sm hover:bg-gold-secondary transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gold-primary/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-foreground/40 uppercase tracking-widest">
                    <p>© 2024 Hiranya Music. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-gold-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gold-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
