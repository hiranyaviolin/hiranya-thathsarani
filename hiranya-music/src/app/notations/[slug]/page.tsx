import React from 'react';
import { NOTATIONS_DATA } from '@/constants/notations';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Music, FileText } from 'lucide-react';

interface NotationDetailPageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return NOTATIONS_DATA.map((notation) => ({
        slug: notation.id,
    }));
}

export default async function NotationDetailPage({ params }: NotationDetailPageProps) {
    const { slug } = await params;
    const notation = NOTATIONS_DATA.find((n) => n.id === slug);

    if (!notation) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <Link 
                    href="/notations"
                    className="inline-flex items-center space-x-2 text-foreground/60 hover:text-gold-primary transition-colors mb-12 group"
                >
                    <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Notations</span>
                </Link>

                <div className="glass p-8 md:p-12 rounded-3xl border border-gold-primary/20">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary">
                            <Music size={32} />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-serif font-bold">{notation.title}</h1>
                            <p className="text-foreground/60 mt-2">{notation.description}</p>
                        </div>
                    </div>

                    <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 relative bg-background/50 border border-white/5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src={notation.imageUrl} 
                            alt={notation.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-3 text-gold-primary border-b border-gold-primary/10 pb-4">
                            <FileText size={24} />
                            <h2 className="text-2xl font-serif font-bold">Musical Notations</h2>
                        </div>
                        
                        <div className="bg-background/40 rounded-xl p-8 border border-white/5 whitespace-pre-wrap font-mono text-sm md:text-base leading-relaxed text-foreground/80">
                            {notation.content}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
