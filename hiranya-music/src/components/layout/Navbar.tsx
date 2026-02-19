"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Music', href: '/music' },
    { name: 'Events', href: '/events' },
    { name: 'Lessons', href: '/lessons' },
    { name: 'Booking', href: '/booking' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
                scrolled ? 'glass py-3 shadow-lg shadow-gold-primary/5' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 group">
                    <motion.div
                        whileHover={{ rotate: 15 }}
                        className="w-10 h-10 bg-gold-primary rounded-full flex items-center justify-center text-background"
                    >
                        <Music size={20} strokeWidth={2.5} />
                    </motion.div>
                    <div className="flex flex-col">
                        <span className="text-xl font-serif font-bold tracking-tight text-gold-primary">
                            HIRANYA
                        </span>
                        <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/60 leading-none">
                            Violinist
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/80 hover:text-gold-primary transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/booking"
                        className="bg-gold-primary hover:bg-gold-secondary text-background px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-gold-primary/20"
                    >
                        BOOK NOW
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 glass border-t border-gold-primary/10 flex flex-col p-6 space-y-4 md:hidden shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-foreground/90 hover:text-gold-primary transition-colors py-2 border-b border-white/5"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/booking"
                            onClick={() => setIsOpen(false)}
                            className="bg-gold-primary text-background text-center py-4 rounded-xl font-bold mt-4"
                        >
                            BOOK NOW
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
