"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CTA } from "@/constants/home";
import { VARIABLES } from "@/constants/variables";

export default function CTASection() {
    return (
        <section className="py-24 px-6 bg-gold-primary overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <motion.div 
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-64 h-64 border-[40px] border-background rounded-full -translate-x-1/2 -translate-y-1/2" 
                />
                <motion.div 
                    animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 right-0 w-96 h-96 border-[60px] border-background rounded-full translate-x-1/3 translate-y-1/3" 
                />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto text-center relative z-10"
            >
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-background mb-8">
                    {CTA.title}
                </h2>
                <p className="text-background/80 text-lg mb-12 max-w-2xl mx-auto font-medium">
                    {CTA.description}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <motion.a
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(5,5,5,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        href="/booking"
                        className="bg-background text-gold-primary px-10 py-4 rounded-full font-bold tracking-widest transition-colors"
                    >
                        {CTA.enquireButton}
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05, backgroundColor: "#050505", color: "#d4af37" }}
                        whileTap={{ scale: 0.95 }}
                        href={`https://wa.me/${VARIABLES.phoneRaw}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent border-2 border-background text-background px-10 py-4 rounded-full font-bold tracking-widest transition-colors"
                    >
                        {CTA.whatsappButton}
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}
