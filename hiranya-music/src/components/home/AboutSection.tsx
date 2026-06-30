"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BIOGRAPHY } from '@/constants/about';

export default function AboutSection() {
    return (
        <section className="px-6 pt-0 pb-24 bg-background">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 relative w-full"
                >
                    <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden glass border-gold-primary/10">
                        <div className="absolute inset-0 bg-[url('/hero-bg2.png')] bg-cover bg-center" />
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold-primary rounded-full blur-[100px] opacity-20 hidden md:block" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 space-y-8"
                >
                    <span className="text-gold-primary uppercase tracking-[0.4em] font-bold text-xs block">{BIOGRAPHY.tagline}</span>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold">{BIOGRAPHY.title} Thathsarani</h2>
                    <p className="text-xl text-gold-muted font-serif italic italic-shadow">{BIOGRAPHY.subtitle}</p>
                    <p className="text-foreground/70 leading-relaxed font-light text-lg text-justify">
                        {BIOGRAPHY.description1}
                    </p>
                    {/* <p className="text-foreground/70 leading-relaxed font-light text-lg align-justify text-black">
                        {BIOGRAPHY.description2}
                    </p> */}

                    <div className="flex gap-6">
                        {BIOGRAPHY.stats.map((stat, idx) => (
                            <React.Fragment key={idx}>
                                {idx > 0 && <div className="w-px h-full bg-white/10" />}
                                <div className="text-center">
                                    <p className="text-7xl font-serif font-bold text-gold-primary mb-2">{stat.value}</p>
                                    <p className="text-[10px] uppercase tracking-widest text-foreground/40">{stat.label}</p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
