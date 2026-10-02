"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Music, Instagram, Youtube, Facebook, Mail, Phone } from 'lucide-react';
import { VARIABLES } from "@/constants/variables";
import { FOOTER } from "@/constants/layout";

export default function Footer() {
    const [animDuration, setAnimDuration] = useState(15); // Default to 15s

    useEffect(() => {
        // Determine the appropriate duration based on screen size (faster on mobile)
        const updateDuration = () => {
            const isMobile = window.innerWidth < 768;
            setAnimDuration(isMobile ? 8 : 15);
        };
        
        updateDuration(); // Set initially
        window.addEventListener('resize', updateDuration);
        return () => window.removeEventListener('resize', updateDuration);
    }, []);

    return (
        <footer className="bg-card border-t border-gold-primary/10 pt-16 pb-8 px-6 relative">
            {/* Animated Character Container */}
            <div className="absolute -top-[80px] left-0 w-full h-[80px] pointer-events-none z-20 overflow-hidden">
                <motion.div
                    animate={{ x: ["-100%", "100vw"] }}
                    transition={{ 
                        duration: animDuration, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    className="absolute top-0 left-0 h-full w-auto flex items-end"
                >
                    <img src="/video.gif" alt="Walking Character" className="h-[80px] w-auto object-contain" />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 bg-gold-primary rounded-full flex items-center justify-center text-background">
                                <Music size={16} />
                            </div>
                            <span className="text-xl font-serif font-bold text-gold-primary">{FOOTER.brand}</span>
                        </Link>
                        <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                            {FOOTER.brandDescription}
                        </p>
                        <div className="flex space-x-4">
                            <Link href={VARIABLES.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-background transition-all">
                                <Instagram size={18} />
                            </Link>
                            <Link href={VARIABLES.youtubeUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-background transition-all">
                                <Youtube size={18} />
                            </Link>
                            <Link href={VARIABLES.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-background transition-all">
                                <Facebook size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gold-primary font-serif font-bold mb-6 uppercase tracking-wider text-sm">{FOOTER.navTitle}</h4>
                        <ul className="space-y-4">
                            {FOOTER.navItems.map((item) => {
                                let href = `/${item.toLowerCase()}`;
                                if (item.toLowerCase() === 'home') href = '/';
                                if (item.toLowerCase() === 'contact') href = '/booking';
                                
                                return (
                                <li key={item}>
                                    <Link href={href} className="text-foreground/60 hover:text-gold-primary transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-gold-primary font-serif font-bold mb-6 uppercase tracking-wider text-sm">{FOOTER.contactTitle}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3 text-foreground/60 text-sm">
                                <Mail size={16} className="text-gold-primary" />
                                <span>{VARIABLES.email}</span>
                            </li>
                            <li className="flex items-center space-x-3 text-foreground/60 text-sm">
                                <Phone size={16} className="text-gold-primary" />
                                <span>{VARIABLES.phone}</span>
                            </li>
                            <li className="mt-4">
                                <Link href="/booking" className="text-gold-primary hover:underline text-sm font-bold">
                                    {FOOTER.bookEventsLink}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* YouTube Subscribe */}
                    <div>
                        <h4 className="text-gold-primary font-serif font-bold mb-6 uppercase tracking-wider text-sm">{FOOTER.youtubeTitle}</h4>
                        <p className="text-foreground/60 text-sm mb-4">{FOOTER.youtubeText}</p>
                        <div className="flex flex-col space-y-3">
                            <Link href={VARIABLES.youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full bg-[#FF0000] text-white font-bold py-3 rounded-xl text-sm hover:bg-[#CC0000] transition-all gap-2 shadow-[0_4px_14px_0_rgba(255,0,0,0.39)]">
                                <Youtube size={20} />
                                {FOOTER.youtubeSubscribeBtn}
                            </Link>
                            <div className="pt-2">
                                <p className="text-foreground/50 text-[11px] uppercase tracking-widest mb-3 font-semibold">{FOOTER.socialText}</p>
                                <div className="flex gap-2">
                                    <Link href={VARIABLES.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-bold py-2.5 rounded-xl text-[10px] sm:text-xs hover:opacity-90 transition-all gap-1 shadow-[0_4px_14px_0_rgba(220,39,67,0.39)]">
                                        <Instagram size={14} />
                                        Insta
                                    </Link>
                                    <Link href={VARIABLES.tiktokUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center bg-[#010101] border border-white/10 text-white font-bold py-2.5 rounded-xl text-[10px] sm:text-xs hover:bg-[#111111] transition-all gap-1 shadow-lg hover:border-white/20">
                                        <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                                        </svg>
                                        TikTok
                                    </Link>
                                    <Link href={VARIABLES.facebookUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center bg-[#1877F2] text-white font-bold py-2.5 rounded-xl text-[10px] sm:text-xs hover:bg-[#166FE5] transition-all gap-1 shadow-[0_4px_14px_0_rgba(24,119,242,0.39)]">
                                        <Facebook size={14} fill="currentColor" strokeWidth={0} />
                                        FB
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gold-primary/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-foreground/40 uppercase tracking-widest">
                    <p>{FOOTER.copyright}</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-gold-primary transition-colors">{FOOTER.privacyPolicy}</Link>
                        <Link href="#" className="hover:text-gold-primary transition-colors">{FOOTER.termsOfService}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
