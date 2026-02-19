"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Music, Film, Globe, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
    { id: 'all', name: 'All Works' },
    { id: 'classical', name: 'Classical' },
    { id: 'sri-lankan', name: 'Sri Lankan' },
    { id: 'fusion', name: 'Fusion' },
];

const musicWorks = [
    {
        title: "Beethoven's Violin Sonata No. 9",
        category: "classical",
        type: "audio",
        image: "https://images.unsplash.com/photo-1507838596018-bd7c368cba73?q=80&w=800&auto=format&fit=crop",
        duration: "12:45"
    },
    {
        title: "Danno Budunge (Contemporary Solo)",
        category: "sri-lankan",
        type: "video",
        image: "https://images.unsplash.com/photo-1514481909227-e54abc4da6ad?q=80&w=800&auto=format&fit=crop",
        duration: "4:30"
    },
    {
        title: "Ocean Breeze: Violin & Sitar Fusion",
        category: "fusion",
        type: "audio",
        image: "https://images.unsplash.com/photo-1465804575741-338b8555e02f?q=80&w=800&auto=format&fit=crop",
        duration: "6:15"
    },
    {
        title: "Bach Partita No. 2 Premiere",
        category: "classical",
        type: "video",
        image: "https://images.unsplash.com/photo-1541626395124-219ec94723c1?q=80&w=800&auto=format&fit=crop",
        duration: "8:20"
    },
    {
        title: "Kandy Perahera Rhythms",
        category: "sri-lankan",
        type: "audio",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
        duration: "5:10"
    },
    {
        title: "Sunset over Colombo (Electro-Violin)",
        category: "fusion",
        type: "video",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop",
        duration: "4:55"
    }
];

export default function MusicPage() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredWorks = activeCategory === 'all'
        ? musicWorks
        : musicWorks.filter(work => work.category === activeCategory);

    return (
        <div className="pt-32 pb-24 px-6 bg-background min-h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-gold-primary uppercase tracking-[0.4em] font-bold text-xs mb-4 block"
                    >
                        Repertoire
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-8"
                    >
                        Music & <span className="gold-gradient">Performances</span>
                    </motion.h1>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={cn(
                                    "px-8 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all border",
                                    activeCategory === cat.id
                                        ? "bg-gold-primary text-background border-gold-primary"
                                        : "bg-transparent text-foreground/60 border-gold-primary/20 hover:border-gold-primary hover:text-gold-primary"
                                )}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredWorks.map((work, i) => (
                        <motion.div
                            layout
                            key={work.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative bg-card rounded-2xl overflow-hidden border border-gold-primary/5 hover:border-gold-primary/30 transition-all"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${work.image})` }}
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                    <button className="w-12 h-12 bg-gold-primary text-background rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all">
                                        <Play size={20} fill="currentColor" />
                                    </button>
                                </div>
                                <div className="absolute top-4 right-4 z-10">
                                    {work.type === 'video' ? (
                                        <div className="p-2 glass rounded-lg text-gold-primary"><Film size={16} /></div>
                                    ) : (
                                        <div className="p-2 glass rounded-lg text-gold-primary"><Music size={16} /></div>
                                    )}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-gold-primary text-[10px] uppercase tracking-[0.2em] font-bold">
                                        {work.category.replace('-', ' ')}
                                    </span>
                                    <span className="text-foreground/40 text-[10px] font-mono">{work.duration}</span>
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-gold-primary transition-colors line-clamp-1">
                                    {work.title}
                                </h3>

                                <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
                                    <button className="text-xs font-bold tracking-widest text-foreground/40 uppercase hover:text-gold-primary transition-colors">
                                        Save to Playlist
                                    </button>
                                    <button className="text-gold-primary flex items-center space-x-2 text-xs font-bold tracking-widest group-hover:space-x-4 transition-all uppercase">
                                        <span>Play Now</span>
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Sri Lankan Music Focus Section (Additional Detail) */}
                <section className="mt-32 p-12 glass rounded-3xl border-gold-primary/10 flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gold-primary/10 text-gold-secondary text-[10px] font-bold tracking-[0.2em] uppercase rounded">
                            <Globe size={12} />
                            <span>Cultural Heritage</span>
                        </div>
                        <h2 className="text-4xl font-serif font-bold">Sri Lankan Folk Adaptations</h2>
                        <p className="text-foreground/60 leading-relaxed font-light">
                            Discover a unique collection of Sri Lankan folk songs (Goyam Kavi, Pathal Kavi) and traditional Vannams
                            reimagined for solo violin and chamber ensembles. These works utilize microtonal nuances characteristic
                            of Sri Lankan melody, blended with western harmonic structures.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {['Baila Fusion', 'Nurthi Melodies', 'Kandyan Rhythms', 'Modern Film Hits'].map((item) => (
                                <div key={item} className="flex items-center space-x-2 text-sm text-foreground/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <button className="bg-gold-primary text-background px-8 py-3 rounded-full font-bold text-xs tracking-widest hover:bg-gold-secondary transition-all">
                            VIEW SPECIAL COLLECTION
                        </button>
                    </div>
                    <div className="flex-1 w-full max-w-md relative aspect-square">
                        <div className="absolute inset-0 bg-gold-primary/5 rounded-full animate-pulse" />
                        <div className="absolute inset-4 border border-gold-primary/20 rounded-full" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Music size={120} className="text-gold-primary/20" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
