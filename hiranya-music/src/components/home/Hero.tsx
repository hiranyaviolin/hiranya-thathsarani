"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import Link from 'next/link';

import { HERO } from '@/constants/home';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Animated Decorative Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div 
                    animate={{ 
                        y: [0, -20, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-gold-primary/10 rounded-full blur-[120px]" 
                />
                <motion.div 
                    animate={{ 
                        y: [0, 20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                        duration: 10, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gold-muted/5 rounded-full blur-[150px]" 
                />
            </div>

            {/* Cinematic Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
            >
                <source src="/bgvideo.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    <motion.span 
                        variants={itemVariants}
                        className="inline-block text-gold-primary tracking-[0.4em] uppercase text-sm font-bold mb-6"
                    >
                        {HERO.tagline}
                    </motion.span>
                    
                    <motion.h1 
                        variants={itemVariants}
                        className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight"
                    >
                        {HERO.titlePart1}<span className="gold-gradient">{HERO.titlePart2}</span> <br className="hidden md:block" />{HERO.titlePart3}
                    </motion.h1>
                    
                    <motion.p 
                        variants={itemVariants}
                        className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
                    >
                        {HERO.descriptionPart1} <br className="hidden md:block" />
                        {HERO.descriptionPart2}
                    </motion.p>

                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                    >
                        <Link
                            href="/booking"
                            className="group relative bg-gold-primary text-background w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm tracking-widest overflow-hidden transition-all hover:pr-12 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] text-center"
                        >
                            <span className="relative z-10">{HERO.bookButton}</span>
                            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={20} />
                        </Link>

                        <Link
                            href="/music"
                            className="flex items-center justify-center w-full sm:w-auto space-x-3 text-gold-primary hover:text-gold-secondary transition-colors font-bold tracking-widest text-sm hover:scale-105"
                        >
                            <div className="w-12 h-12 rounded-full border border-gold-primary/30 flex items-center justify-center group-hover:bg-gold-primary/20 transition-all shadow-[0_0_0_rgba(212,175,55,0)] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                                <Play size={16} fill="currentColor" />
                            </div>
                            <span>{HERO.listenButton}</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="hidden absolute bottom-10 left-1/2 -translate-x-1/2 md:flex flex-col items-center space-y-2 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/30">{HERO.scroll}</span>
                <motion.div 
                    animate={{ height: ["0%", "100%", "0%"], y: [0, 10, 20], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-gold-primary to-transparent" 
                />
            </motion.div>
        </section>
    );
}
