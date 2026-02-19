"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Fallback Background Decorative Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gold-muted/5 rounded-full blur-[150px]" />
            </div>

            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465804575741-338b8555e02f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block text-gold-primary tracking-[0.4em] uppercase text-sm font-bold mb-6">
                        Virtuoso Performer
                    </span>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight">
                        The Soul of <span className="gold-gradient">Sri Lankan</span> <br className="hidden md:block" /> Violin Mastery
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                        Bridging the timeless elegance of Western Classical traditions with the <br className="hidden md:block" />
                        vibrant soul of Sri Lanka's musical heritage.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link
                            href="/booking"
                            className="group relative bg-gold-primary text-background px-8 py-4 rounded-full font-bold text-sm tracking-widest overflow-hidden transition-all hover:pr-12"
                        >
                            <span className="relative z-10">BOOK A PERFORMANCE</span>
                            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={20} />
                        </Link>

                        <Link
                            href="/music"
                            className="flex items-center space-x-3 text-gold-primary hover:text-gold-secondary transition-colors font-bold tracking-widest text-sm"
                        >
                            <div className="w-12 h-12 rounded-full border border-gold-primary/30 flex items-center justify-center group-hover:bg-gold-primary/10 transition-all">
                                <Play size={16} fill="currentColor" />
                            </div>
                            <span>LISTEN TO MUSIC</span>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/30">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold-primary/50 to-transparent" />
            </motion.div>
        </section>
    );
}
