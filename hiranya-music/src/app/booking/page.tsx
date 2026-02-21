"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

export default function BookingPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: 'Private Event',
        date: '',
        message: ''
    });

    const [whatsAppMessage, setWhatsAppMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send the email
        alert("Thank you for your inquiry! Hiranya will get back to you soon.");
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
                        Engagement
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-6"
                    >
                        Booking & <span className="gold-gradient">Collaborations</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/60 max-w-2xl mx-auto font-light"
                    >
                        Whether it's a grand concert, an intimate wedding, or a studio recording,
                        bring a touch of elegance and soul to your project.
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
                            <h2 className="text-3xl font-serif font-bold mb-8">Get in Touch</h2>
                            <div className="space-y-6">
                                <a href="mailto:info@hiranyamusic.com" className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 rounded-full glass border border-gold-primary/20 flex items-center justify-center text-gold-primary group-hover:bg-gold-primary group-hover:text-background transition-all">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-foreground/40 uppercase tracking-widest font-bold">Email</p>
                                        <p className="text-lg font-medium group-hover:text-gold-primary transition-colors">info@hiranyamusic.com</p>
                                    </div>
                                </a>

                                <a href="tel:+94771234567" className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 rounded-full glass border border-gold-primary/20 flex items-center justify-center text-gold-primary group-hover:bg-gold-primary group-hover:text-background transition-all">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-foreground/40 uppercase tracking-widest font-bold">Phone / WhatsApp</p>
                                        <p className="text-lg font-medium group-hover:text-gold-primary transition-colors">+94 77 123 4567</p>
                                    </div>
                                </a>

                                <a href="#" className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 rounded-full glass border border-gold-primary/20 flex items-center justify-center text-gold-primary group-hover:bg-gold-primary group-hover:text-background transition-all">
                                        <Instagram size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-foreground/40 uppercase tracking-widest font-bold">Instagram</p>
                                        <p className="text-lg font-medium group-hover:text-gold-primary transition-colors">@hiranya_violin</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-2xl border-gold-primary/10">
                            <h3 className="text-xl font-serif font-bold mb-4 flex items-center space-x-2">
                                <MessageCircle className="text-gold-primary" size={24} />
                                <span>Instant Inquiry</span>
                            </h3>
                            <p className="text-foreground/60 text-sm mb-6 font-light">
                                Prefer a quick chat? Type your message below and send it directly via WhatsApp.
                            </p>
                            <textarea
                                rows={3}
                                className="w-full bg-background/50 border border-gold-primary/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-gold-primary transition-all resize-none mb-4"
                                placeholder="Hi Hiranya, I'd like to inquire about..."
                                value={whatsAppMessage}
                                onChange={(e) => setWhatsAppMessage(e.target.value)}
                            />
                            <a
                                href={`https://wa.me/94724392750${whatsAppMessage.trim() ? `?text=${encodeURIComponent(whatsAppMessage.trim())}` : ''}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl space-x-2 transition-all"
                            >
                                <MessageCircle size={20} fill="white" />
                                <span>SEND VIA WHATSAPP</span>
                            </a>
                        </div>
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
                                    <label className="text-xs uppercase tracking-widest text-foreground/50 font-bold ml-1">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full bg-background/50 border border-gold-primary/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-gold-primary transition-all"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-foreground/50 font-bold ml-1">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full bg-background/50 border border-gold-primary/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-gold-primary transition-all"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-foreground/50 font-bold ml-1">Event Type</label>
                                    <select
                                        className="w-full bg-background/50 border border-gold-primary/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-gold-primary transition-all appearance-none"
                                        value={formData.eventType}
                                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                                    >
                                        <option>Private Event</option>
                                        <option>Concert / Solo Recital</option>
                                        <option>Wedding Ceremony</option>
                                        <option>Recording / Studio</option>
                                        <option>Other Collaboration</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-foreground/50 font-bold ml-1">Event Date</label>
                                    <input
                                        type="date"
                                        className="w-full bg-background/50 border border-gold-primary/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-gold-primary transition-all"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-foreground/50 font-bold ml-1">Inquiry Details</label>
                                <textarea
                                    required
                                    rows={5}
                                    className="w-full bg-background/50 border border-gold-primary/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-gold-primary transition-all resize-none"
                                    placeholder="Tell us about your event or project..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gold-primary hover:bg-gold-secondary text-background font-bold py-5 rounded-xl transition-all flex items-center justify-center space-x-3 shadow-lg shadow-gold-primary/20 transform hover:-translate-y-1"
                            >
                                <span>SEND ENQUIRY</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
