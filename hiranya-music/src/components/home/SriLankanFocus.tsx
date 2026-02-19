"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const localTracks = [
    {
        title: "Gajaga Vannama (Violin Solo)",
        category: "Folk Adaptation",
        duration: "4:20",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Vikasitha Pem (Violin Fusion)",
        category: "Film Music",
        duration: "5:15",
        image: "https://images.unsplash.com/photo-1507838596018-bd7c368cba73?q=80&w=800&auto=format&fit=crop"
    }
];

export default function SriLankanFocus() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Decorative Text background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-serif font-extrabold text-gold-primary/5 select-none pointer-events-none whitespace-nowrap hidden lg:block">
                SRI LANKA
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-gold-primary uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Sri Lankan Resonance</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">A Focus on Local Roots</h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto font-light">
                        Highlighting violin adaptations of folk songs, traditional vannams, and contemporary Sri Lankan film music.
                        Experience the fusion of global sound and local soul.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {localTracks.map((track, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="group relative h-[400px] rounded-2xl overflow-hidden border border-gold-primary/10"
                        >
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${track.image})` }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="w-16 h-16 bg-gold-primary text-background rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                                    <Play size={24} fill="currentColor" />
                                </button>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <span className="text-gold-primary text-xs uppercase tracking-widest mb-2 block">{track.category}</span>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold mb-1">{track.title}</h3>
                                        <p className="text-foreground/60 text-xs">Run time: {track.duration}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/music#sri-lankan"
                        className="inline-flex items-center space-x-2 text-gold-primary font-bold hover:space-x-4 transition-all"
                    >
                        <span>EXPLORE SRI LANKAN FUSION</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
