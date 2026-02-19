"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Music, BookOpen, Heart, Globe, Award } from 'lucide-react';
import { cn } from "@/lib/utils";

export default function AboutPage() {
    const milestones = [
        { year: '2008', title: 'Musical Beginnings', description: 'Started formal training in Colombo, showing early promise in classical repertoire.' },
        { year: '2015', title: 'International Debut', description: 'Performed as a soloist with a prestigious regional youth orchestra.' },
        { year: '2019', title: 'Cultural Synthesis', description: 'Released "Lankan Strings," a groundbreaking album blending folk with jazz-violin.' },
        { year: '2023', title: 'Global Recognition', description: 'Artist-in-residence at a prominent European conservatoire.' },
    ];

    return (
        <div className="pt-32 pb-24 bg-background">
            {/* Hero Section */}
            <section className="px-6 mb-24">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-1 relative"
                    >
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden glass border-gold-primary/10">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541626395124-219ec94723c1?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold-primary rounded-full blur-[100px] opacity-20" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-1 space-y-8"
                    >
                        <span className="text-gold-primary uppercase tracking-[0.4em] font-bold text-xs block">Biography</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold">Hiranya</h1>
                        <p className="text-xl text-gold-muted font-serif italic italic-shadow">Violinist, Educator, & Fusion Artist</p>
                        <p className="text-foreground/70 leading-relaxed font-light text-lg">
                            Hiranya’s musical identity is a tapestry woven from two distinct worlds. Having achieved
                            highest honors in Western Classical violin performance, she felt a profound calling to
                            reconnect with the rhythmic and melodic essence of her Sri Lankan roots.
                        </p>
                        <p className="text-foreground/70 leading-relaxed font-light text-lg">
                            Today, she is recognized as one of the most versatile violinists of her generation, moving
                            effortlessly between the rigorous demands of a Bach Chaconne and the soulful, fluid
                            nuances of a Sinhala folk ballad.
                        </p>

                        <div className="flex gap-6">
                            <div className="text-center">
                                <p className="text-2xl font-serif font-bold text-gold-primary">15+</p>
                                <p className="text-[10px] uppercase tracking-widest text-foreground/40">Years Experience</p>
                            </div>
                            <div className="w-px h-full bg-white/10" />
                            <div className="text-center">
                                <p className="text-2xl font-serif font-bold text-gold-primary">200+</p>
                                <p className="text-[10px] uppercase tracking-widest text-foreground/40">Shows Performed</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 px-6 bg-card relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl font-serif font-bold mb-12">Musical Philosophy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-gold-primary/10 rounded-xl flex items-center justify-center text-gold-primary">
                                <Heart size={24} />
                            </div>
                            <h3 className="text-xl font-bold">Emotion Over Perfection</h3>
                            <p className="text-foreground/60 text-sm font-light leading-relaxed">
                                Technical mastery is merely a tool. True music happens when the violinist disappears
                                and only the emotion remains, speaking directly to the listener's soul.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-gold-primary/10 rounded-xl flex items-center justify-center text-gold-primary">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-xl font-bold">Bridging Cultures</h3>
                            <p className="text-foreground/60 text-sm font-light leading-relaxed">
                                Music is a universal language. By blending different traditions, we find common
                                humanity and create something entirely new and beautiful.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-serif font-bold mb-16 text-center">My Journey</h2>
                <div className="relative border-l border-gold-primary/20 ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-2 md:gap-x-12">
                    {milestones.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={cn(
                                "mb-12 relative pl-12 md:pl-0 md:w-full",
                                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                            )}
                        >
                            <div className="absolute left-0 top-0 w-8 h-8 bg-gold-primary rounded-full border-4 border-background -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 z-10 hidden md:block" />
                            <span className="text-3xl font-serif font-bold text-gold-primary mb-2 block">{m.year}</span>
                            <h4 className="text-xl font-bold mb-2">{m.title}</h4>
                            <p className="text-foreground/60 font-light text-sm">{m.description}</p>
                        </motion.div>
                    ))}
                    {/* Central Line for Desktop */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold-primary/20 -translate-x-1/2 hidden md:block" />
                </div>
            </section>

            {/* Teaching Section */}
            <section className="py-24 px-6 bg-gold-primary text-background">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-4xl font-serif font-bold">Violin Lessons</h2>
                        <p className="text-background/80 font-medium">
                            Hiranya offers personalized violin instruction for students of all ages.
                            Her methodology focuses on healthy technique, musicality, and finding
                            joy in practice.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                                <div className="w-6 h-6 rounded-full bg-background/20 flex items-center justify-center"><BookOpen size={14} /></div>
                                <span className="font-bold">Virtual & In-person</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="w-6 h-6 rounded-full bg-background/20 flex items-center justify-center"><Heart size={14} /></div>
                                <span className="font-bold">Holistic Approach</span>
                            </li>
                        </ul>
                        <button className="bg-background text-gold-primary px-10 py-4 rounded-full font-bold tracking-widest hover:scale-105 transition-transform uppercase text-xs mt-4">
                            Enquire about Lessons
                        </button>
                    </div>
                    <div className="flex-1 relative aspect-video glass border-background/20 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-background/10 flex items-center justify-center">
                            <Music size={64} className="opacity-20" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
