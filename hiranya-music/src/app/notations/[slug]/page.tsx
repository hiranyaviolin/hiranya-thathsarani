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
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-6 lg:px-8">
            <div className="max-w-[98%] xl:max-w-[1600px] mx-auto">
                <Link
                    href="/notations"
                    className="inline-flex items-center space-x-2 text-foreground/60 hover:text-gold-primary transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Notations</span>
                </Link>

                <div className="glass pt-6 px-8 pb-12 md:pt-8 md:px-12 md:pb-16 lg:pt-10 lg:px-20 lg:pb-24 rounded-3xl border border-gold-primary/20 mt-4 mb-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-10 text-center md:text-left">
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

                <div className="text-sm md:text-base text-foreground/50 italic text-center font-sans max-w-5xl mx-auto px-4 mb-16">
                    <p className="mb-4">
                        මෙම ස්වර ප්‍රස්තාරය අධ්‍යාපනික හා දැනුම බෙදාගැනීමේ අරමුණින් පමණක් මෙහි පළ කරනු ලබයි. මෙය එක කිසිදු ආකාරයකින් වාණිජමය අරමුණක් සඳහා භාවිතා නොකරන බව සඳහන් කරමි.
                    </p>
                    <p>
                        මෙහි ඇතුළත් ගීතය, සංගීත නිර්මාණය සහ ඒ හා සම්බන්ධ මුල් කෘතියේ සියලුම කර්තෘ අයිතිවාසිකම් සහ බුද්ධිමය දේපළ අයිතිවාසිකම් මුල් කතුවරුන් සහ අදාළ අයිතිවාසිකම් හිමිකරුවන් සතු වේ.
                    </p>
                </div>
            </div>
        </main>
    );
}
