"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import Link from 'next/link';
import YouTube from 'react-youtube';

import { HERO } from '@/constants/home';
import { VARIABLES } from '@/constants/variables';

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
            {/* 
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
            >
                <source src="/bgvideo.mp4" type="video/mp4" />
            </video> 
            */}

            <div className="absolute inset-0 w-full h-full overflow-hidden opacity-50 grayscale pointer-events-none">
                {/* 
                  To change the loop timestamps, edit the 'start' and 'end' variables below. 
                  The values MUST be in total seconds (e.g., for 3 minutes and 12 seconds, use 192).
                */}
                <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ width: 'max(100vw, 178vh)', height: 'max(100vh, 56.25vw)' }}
                >
                    <YouTube
                        videoId="HRzHKsHQIK4"
                        opts={{
                            width: '100%',
                            height: '100%',
                            playerVars: {
                                autoplay: 1,
                                controls: 0,
                                rel: 0,
                                showinfo: 0,
                                mute: 1,
                                modestbranding: 1,
                                playsinline: 1,
                                start: 192,
                                end: 225,
                                disablekb: 1,
                            },
                        }}
                        onReady={(e) => {
                            e.target.playVideo();
                        }}
                        onEnd={(e) => {
                            e.target.seekTo(192);
                            e.target.playVideo();
                        }}
                        className="w-full h-full"
                        iframeClassName="w-full h-full border-none"
                    />
                </div>
            </div>
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
                        className="inline-block text-gold-primary tracking-[0.4em] uppercase text-sm font-bold mb-2 md:mb-6"
                    >
                        {HERO.tagline}
                    </motion.span>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 md:mb-8 leading-tight"
                    >
                        {HERO.titlePart1} <br />
                        <span className="text-gold-primary">{HERO.titlePart2}</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-8 md:mb-12 font-light leading-relaxed"
                    >
                        {HERO.descriptionPart1}
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
                            href={VARIABLES.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
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
                <motion.div
                    animate={{ height: ["0%", "100%", "0%"], y: [0, 10, 20], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-gold-primary to-transparent"
                />
            </motion.div>
        </section>
    );
}
