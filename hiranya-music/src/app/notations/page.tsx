import React from 'react';
import NotationCard from '@/components/notations/NotationCard';
import { NOTATIONS_DATA } from '@/constants/notations';
import { Music } from 'lucide-react';

export default function NotationsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-gold-primary/10 text-gold-primary mb-6">
                        <Music size={24} />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                        Violin <span className="text-gold-primary">Notations</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
                        Explore our collection of violin notations. Click on any song below to view its full musical sheet and details.
                    </p>
                </div>

                {/* Featured Video Section */}
                <div className="mb-16 md:mb-24 max-w-4xl mx-auto rounded-3xl overflow-hidden glass border border-gold-primary/20 shadow-2xl">
                    {/* <div className="aspect-video relative">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Featured Violin Performance"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {NOTATIONS_DATA.map((notation) => (
                        <NotationCard key={notation.id} notation={notation} />
                    ))}
                </div>
            </div>
        </main>
    );
}
