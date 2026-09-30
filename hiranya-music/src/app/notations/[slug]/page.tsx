import React from 'react';
import { NOTATIONS_DATA } from '@/constants/notations';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Music } from 'lucide-react';
import NotationSyncPlayer from '@/components/notations/NotationSyncPlayer';

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
            <div className="max-w-7xl mx-auto">
                <Link 
                    href="/notations"
                    className="inline-flex items-center space-x-2 text-foreground/60 hover:text-gold-primary transition-colors mb-12 group"
                >
                    <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Notations</span>
                </Link>

                <div className="glass p-6 md:p-8 lg:p-12 rounded-3xl border border-gold-primary/20">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 mb-8 text-center md:text-left">
                        <div className="w-20 h-20 md:w-16 md:h-16 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary shrink-0">
                            <Music size={32} />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-serif font-bold">{notation.title}</h1>
                            <p className="text-foreground/60 mt-4 md:mt-2">{notation.description}</p>
                        </div>
                    </div>

                    <NotationSyncPlayer notation={notation} />
                </div>
            </div>
        </main>
    );
}
