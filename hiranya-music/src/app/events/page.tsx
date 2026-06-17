"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Ticket, Camera } from 'lucide-react';
import { EVENTS_HERO, UPCOMING_EVENTS, PAST_EVENTS } from '@/constants/events';

export default function EventsPage() {
    return (
        <div className="pt-32 pb-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-gold-primary uppercase tracking-[0.4em] font-bold text-xs mb-4 block"
                    >
                        {EVENTS_HERO.tagline}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-6"
                    >
                        {EVENTS_HERO.titlePart1}<span className="gold-gradient">{EVENTS_HERO.titlePart2}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/60 max-w-2xl mx-auto font-light"
                    >
                        {EVENTS_HERO.description}
                    </motion.p>
                </header>

                {/* Upcoming Events */}
                <section className="mb-32">
                    <h2 className="text-3xl font-serif font-bold mb-12 flex items-center space-x-4">
                        <Calendar className="text-gold-primary" />
                        <span>{UPCOMING_EVENTS.title}</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {UPCOMING_EVENTS.list.map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="glass p-8 rounded-3xl border-gold-primary/10 hover:border-gold-primary/30 transition-all group"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className="bg-gold-primary/10 text-gold-primary px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                                        {event.type}
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-serif font-bold text-gold-primary">{event.date.split(',')[0]}</p>
                                        <p className="text-xs text-foreground/40">{event.time}</p>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-6 group-hover:text-gold-primary transition-colors">{event.title}</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center space-x-3 text-foreground/60 text-sm">
                                        <MapPin size={16} className="text-gold-muted" />
                                        <span>{event.venue}, {event.location}</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-foreground/60 text-sm">
                                        <Ticket size={16} className="text-gold-muted" />
                                        <span>{event.price}</span>
                                    </div>
                                </div>

                                <a
                                    href="/booking"
                                    className="inline-flex items-center justify-center w-full bg-gold-primary text-background font-bold py-4 rounded-xl hover:bg-gold-secondary transition-all"
                                >
                                    {UPCOMING_EVENTS.getTickets}
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Past Performances Gallery */}
                <section>
                    <h2 className="text-3xl font-serif font-bold mb-12 flex items-center space-x-4">
                        <Camera className="text-gold-primary" />
                        <span>{PAST_EVENTS.title}</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PAST_EVENTS.list.map((perf, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative h-[350px] rounded-2xl overflow-hidden border border-gold-primary/5"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                                    style={{ backgroundImage: `url(${perf.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <span className="text-[10px] uppercase tracking-widest text-gold-primary font-bold mb-2 block">{perf.date}</span>
                                    <h4 className="text-xl font-bold mb-1">{perf.title}</h4>
                                    <p className="text-foreground/60 text-xs font-light">{perf.venue}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
