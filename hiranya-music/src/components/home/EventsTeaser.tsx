"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const upcomingEvents = [
    {
        date: "MAR 15",
        title: "Classical Strings Evening",
        venue: "Lionel Wendt Art Centre",
        location: "Colombo, Sri Lanka",
        type: "Concert"
    },
    {
        date: "APR 02",
        title: "Fusion Night: Violin & Tabla",
        venue: "Galle Face Hotel",
        location: "Colombo, Sri Lanka",
        type: "Performance"
    },
    {
        date: "MAY 20",
        title: "Symphony of the Indian Ocean",
        venue: "BMICH Main Hall",
        location: "Colombo, Sri Lanka",
        type: "Soloist Appearance"
    }
];

export default function EventsTeaser() {
    return (
        <section className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
                    <div>
                        <span className="text-gold-primary uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Performances</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold">Upcoming Engagements</h2>
                    </div>
                    <Link
                        href="/events"
                        className="text-gold-primary hover:text-gold-secondary transition-colors font-bold tracking-widest text-xs flex items-center space-x-2"
                    >
                        <span>VIEW ALL EVENTS</span>
                        <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="space-y-4">
                    {upcomingEvents.map((event, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group glass p-8 flex flex-col md:flex-row items-center justify-between rounded-xl hover:border-gold-primary/30 transition-all cursor-default"
                        >
                            <div className="flex flex-col md:flex-row items-center md:space-x-12 w-full md:w-auto text-center md:text-left">
                                <div className="mb-4 md:mb-0">
                                    <span className="text-3xl font-serif font-bold text-gold-primary leading-none block">{event.date.split(' ')[1]}</span>
                                    <span className="text-xs tracking-widest text-foreground/40 block">{event.date.split(' ')[0]}</span>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold mb-1 group-hover:text-gold-primary transition-colors">{event.title}</h4>
                                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-foreground/50 text-sm">
                                        <span className="flex items-center space-x-1">
                                            <Calendar size={14} className="text-gold-muted" />
                                            <span>{event.date}, 2024</span>
                                        </span>
                                        <span className="flex items-center space-x-1">
                                            <MapPin size={14} className="text-gold-muted" />
                                            <span>{event.venue}, {event.location}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 md:mt-0 flex items-center space-x-6">
                                <span className="px-3 py-1 bg-gold-primary/10 text-gold-secondary text-[10px] font-bold tracking-widest uppercase rounded">
                                    {event.type}
                                </span>
                                <Link
                                    href="/booking"
                                    className="bg-transparent border border-gold-primary/30 hover:bg-gold-primary hover:text-background text-gold-primary px-6 py-2 rounded-full text-xs font-bold transition-all"
                                >
                                    TICKETS
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
