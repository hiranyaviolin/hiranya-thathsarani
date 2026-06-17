"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, BookOpen, Music } from 'lucide-react';

import { ABOUT_TEASER } from '@/constants/home';

export default function AboutTeaser() {
    const icons = [
        <Award className="text-gold-primary" key="award" />,
        <Music className="text-gold-primary" key="music" />,
        <BookOpen className="text-gold-primary" key="book" />
    ];
    const highlights = ABOUT_TEASER.highlights.map((h, i) => ({
        ...h,
        icon: icons[i]
    }));

    return (
        <section className="py-24 px-6 bg-card">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-[4/5] bg-background border border-gold-primary/10 rounded-2xl overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541626395124-219ec94723c1?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-xl border-gold-primary/5">
                        <p className="text-gold-primary font-serif italic text-lg whitespace-pre-line">
                            {ABOUT_TEASER.quote}
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-gold-primary uppercase tracking-[0.3em] font-bold text-sm mb-4 block">{ABOUT_TEASER.tagline}</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                        {ABOUT_TEASER.titlePart1} <br /> {ABOUT_TEASER.titlePart2}
                    </h2>
                    <p className="text-foreground/70 mb-10 leading-relaxed text-lg font-light">
                        {ABOUT_TEASER.description}
                    </p>

                    <div className="space-y-6 mb-12">
                        {highlights.map((h, i) => (
                            <div key={i} className="flex space-x-4">
                                <div className="mt-1">{h.icon}</div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{h.title}</h4>
                                    <p className="text-foreground/60 text-sm">{h.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="/about"
                        className="inline-block border border-gold-primary/30 text-gold-primary px-10 py-4 rounded-full font-bold text-xs tracking-widest hover:bg-gold-primary hover:text-background transition-all"
                    >
                        {ABOUT_TEASER.button}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
