"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { BIOGRAPHY } from '@/constants/about';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function AboutSection() {
    return (
        <section className="px-6 pt-0 pb-24 bg-background">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative w-full"
                >
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden glass border-gold-primary/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    >
                        <div className="absolute inset-0 bg-[url('/hero-bg2.png')] bg-cover bg-center transition-transform duration-700 hover:scale-105" />
                    </motion.div>
                    <motion.div 
                        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold-primary rounded-full blur-[100px] opacity-20 hidden md:block" 
                    />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex-1 space-y-8"
                >
                    <motion.span variants={itemVariants} className="text-gold-primary uppercase tracking-[0.4em] font-bold text-xs block">
                        {BIOGRAPHY.tagline}
                    </motion.span>
                    <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-serif font-bold">
                        {BIOGRAPHY.title} Thathsarani
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-xl text-gold-muted font-serif italic italic-shadow">
                        {BIOGRAPHY.subtitle}
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-foreground/70 leading-relaxed font-light text-lg text-justify">
                        {BIOGRAPHY.description1}
                    </motion.p>
                    {/* <p className="text-foreground/70 leading-relaxed font-light text-lg align-justify text-black">
                        {BIOGRAPHY.description2}
                    </p> */}

                    <motion.div variants={itemVariants} className="flex gap-6">
                        {BIOGRAPHY.stats.map((stat, idx) => (
                            <React.Fragment key={idx}>
                                {idx > 0 && <div className="w-px h-full bg-white/10" />}
                                <div className="text-center group">
                                    <motion.p 
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.4 + (idx * 0.2), type: "spring" }}
                                        viewport={{ once: true }}
                                        className="text-7xl font-serif font-bold text-gold-primary mb-2 group-hover:scale-110 transition-transform"
                                    >
                                        {stat.value}
                                    </motion.p>
                                    <p className="text-[10px] uppercase tracking-widest text-foreground/40">{stat.label}</p>
                                </div>
                            </React.Fragment>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
