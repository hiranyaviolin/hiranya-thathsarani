"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Instagram, MessageCircle, Youtube, Facebook } from 'lucide-react';
import { BOOKING_HERO, CONTACT_INFO, INSTANT_INQUIRY, BOOKING_FORM } from '@/constants/booking';
import { VARIABLES } from '@/constants/variables';

export default function BookingPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: BOOKING_FORM.eventOptions[0],
        date: '',
        message: ''
    });

    const [whatsAppMessage, setWhatsAppMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send the email
        alert(BOOKING_FORM.successAlert);
    };

    return (
        <div className="pt-32 pb-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-gold-primary uppercase tracking-[0.4em] font-bold text-xs mb-4 block"
                    >
                        {BOOKING_HERO.tagline}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-6"
                    >
                        {BOOKING_HERO.titlePart1}<span className="gold-gradient">{BOOKING_HERO.titlePart2}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/60 max-w-2xl mx-auto font-light"
                    >
                        {BOOKING_HERO.description}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-8">{CONTACT_INFO.title}</h2>
                            <div className="space-y-6">
                                <a href={`mailto:${CONTACT_INFO.emailValue}`} className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 rounded-full glass border border-gold-primary/20 flex items-center justify-center text-gold-primary group-hover:bg-gold-primary group-hover:text-background transition-all">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-foreground/40 uppercase tracking-widest font-bold">{CONTACT_INFO.emailLabel}</p>
                                        <p className="text-lg font-medium group-hover:text-gold-primary transition-colors">{CONTACT_INFO.emailValue}</p>
                                    </div>
                                </a>

                                {/* <a href={`tel:${VARIABLES.phoneRaw}`} className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 rounded-full glass border border-gold-primary/20 flex items-center justify-center text-gold-primary group-hover:bg-gold-primary group-hover:text-background transition-all">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-foreground/40 uppercase tracking-widest font-bold">{CONTACT_INFO.phoneLabel}</p>
                                        <p className="text-lg font-medium group-hover:text-gold-primary transition-colors">{CONTACT_INFO.phoneValue}</p>
                                    </div>
                                </a> */}

                                <a href={VARIABLES.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 rounded-full glass border border-gold-primary/20 flex items-center justify-center text-gold-primary group-hover:bg-gold-primary group-hover:text-background transition-all">
                                        <Instagram size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-foreground/40 uppercase tracking-widest font-bold">{CONTACT_INFO.instagramLabel}</p>
                                        <p className="text-lg font-medium group-hover:text-gold-primary transition-colors">{CONTACT_INFO.instagramValue}</p>
                                    </div>
                                </a>

                                <a href={VARIABLES.facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 rounded-full glass border border-gold-primary/20 flex items-center justify-center text-gold-primary group-hover:bg-gold-primary group-hover:text-background transition-all">
                                        <Facebook size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-foreground/40 uppercase tracking-widest font-bold">{CONTACT_INFO.facebookLabel}</p>
                                        <p className="text-lg font-medium group-hover:text-gold-primary transition-colors">{CONTACT_INFO.facebookValue}</p>
                                    </div>
                                </a>

                                <a href={VARIABLES.youtubeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 rounded-full glass border border-gold-primary/20 flex items-center justify-center text-gold-primary group-hover:bg-gold-primary group-hover:text-background transition-all">
                                        <Youtube size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-foreground/40 uppercase tracking-widest font-bold">{CONTACT_INFO.youtubeLabel}</p>
                                        <p className="text-lg font-medium group-hover:text-gold-primary transition-colors">{CONTACT_INFO.youtubeValue}</p>
                                    </div>
                                </a>

                                <a href={VARIABLES.spotifyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 rounded-full glass border border-gold-primary/20 flex items-center justify-center text-gold-primary group-hover:bg-gold-primary group-hover:text-background transition-all">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-foreground/40 uppercase tracking-widest font-bold">{CONTACT_INFO.spotifyLabel}</p>
                                        <p className="text-lg font-medium group-hover:text-gold-primary transition-colors">{CONTACT_INFO.spotifyValue}</p>
                                    </div>
                                </a>

                                <a href={VARIABLES.tiktokUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 rounded-full glass border border-gold-primary/20 flex items-center justify-center text-gold-primary group-hover:bg-gold-primary group-hover:text-background transition-all">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-foreground/40 uppercase tracking-widest font-bold">{CONTACT_INFO.tiktokLabel}</p>
                                        <p className="text-lg font-medium group-hover:text-gold-primary transition-colors">{CONTACT_INFO.tiktokValue}</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* <div className="glass p-8 rounded-2xl border-gold-primary/10">
                            <h3 className="text-xl font-serif font-bold mb-4 flex items-center space-x-2">
                                <MessageCircle className="text-gold-primary" size={24} />
                                <span>{INSTANT_INQUIRY.title}</span>
                            </h3>
                            <p className="text-foreground/60 text-sm mb-6 font-light">
                                {INSTANT_INQUIRY.description}
                            </p>
                            <textarea
                                rows={3}
                                className="w-full bg-background/50 border border-gold-primary/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-gold-primary transition-all resize-none mb-4"
                                placeholder={INSTANT_INQUIRY.placeholder}
                                value={whatsAppMessage}
                                onChange={(e) => setWhatsAppMessage(e.target.value)}
                            />
                            <a
                                href={`https://wa.me/${VARIABLES.phoneRawBooking}${whatsAppMessage.trim() ? `?text=${encodeURIComponent(whatsAppMessage.trim())}` : ''}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl space-x-2 transition-all"
                            >
                                <MessageCircle size={20} fill="white" />
                                <span>{INSTANT_INQUIRY.buttonText}</span>
                            </a>
                        </div> */}
                    </motion.div>

                    {/* Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-3xl border-gold-primary/10 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-foreground/50 font-bold ml-1">{BOOKING_FORM.fullNameLabel}</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full bg-background/50 border border-gold-primary/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-gold-primary transition-all"
                                        placeholder={BOOKING_FORM.fullNamePlaceholder}
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-foreground/50 font-bold ml-1">{BOOKING_FORM.emailLabel}</label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full bg-background/50 border border-gold-primary/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-gold-primary transition-all"
                                        placeholder={BOOKING_FORM.emailPlaceholder}
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-foreground/50 font-bold ml-1">{BOOKING_FORM.eventTypeLabel}</label>
                                    <select
                                        className="w-full bg-background/50 border border-gold-primary/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-gold-primary transition-all appearance-none"
                                        value={formData.eventType}
                                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                                    >
                                        {BOOKING_FORM.eventOptions.map((opt) => (
                                            <option key={opt}>{opt}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-foreground/50 font-bold ml-1">{BOOKING_FORM.eventDateLabel}</label>
                                    <input
                                        type="date"
                                        className="w-full bg-background/50 border border-gold-primary/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-gold-primary transition-all"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-foreground/50 font-bold ml-1">{BOOKING_FORM.detailsLabel}</label>
                                <textarea
                                    required
                                    rows={5}
                                    className="w-full bg-background/50 border border-gold-primary/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-gold-primary transition-all resize-none"
                                    placeholder={BOOKING_FORM.detailsPlaceholder}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gold-primary hover:bg-gold-secondary text-background font-bold py-5 rounded-xl transition-all flex items-center justify-center space-x-3 shadow-lg shadow-gold-primary/20 transform hover:-translate-y-1"
                            >
                                <span>{BOOKING_FORM.submitButton}</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
