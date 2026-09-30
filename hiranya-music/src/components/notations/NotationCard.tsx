"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/link'; // Wait, I will use next/image but since it might not be configured, I'll use a normal img tag or standard Next image. Let's use standard Next image.
import type { Notation } from '@/constants/notations';
import { Music } from 'lucide-react';

interface NotationCardProps {
    notation: Notation;
}

export default function NotationCard({ notation }: NotationCardProps) {
    return (
        <Link href={`/notations/${notation.id}`} className="group block">
            <div className="glass rounded-3xl overflow-hidden border border-gold-primary/10 hover:border-gold-primary/40 transition-all duration-300">
                <div className="aspect-video relative bg-background/80 flex items-center justify-center overflow-hidden">
                    {/* Placeholder or actual image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                    
                    {/* Assuming the imageUrl might fail, we have a fallback icon just in case */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <Music size={64} />
                    </div>

                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src={notation.imageUrl} 
                        alt={notation.title}
                        className="w-full h-full object-cover relative z-0 group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1000&auto=format&fit=crop';
                        }}
                    />
                </div>
                
                <div className="p-6 md:p-8 relative z-20">
                    <h3 className="text-xl md:text-2xl font-serif font-bold group-hover:text-gold-primary transition-colors mb-2">
                        {notation.title}
                    </h3>
                    <p className="text-foreground/60 text-sm">
                        {notation.description}
                    </p>
                </div>
            </div>
        </Link>
    );
}
