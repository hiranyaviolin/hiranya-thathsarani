"use client";

import React, { useState, useEffect, useRef } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import type { Notation } from '@/constants/notations';
import { FileText } from 'lucide-react';

interface NotationSyncPlayerProps {
    notation: Notation;
}

export default function NotationSyncPlayer({ notation }: NotationSyncPlayerProps) {
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const activeLineRef = useRef<HTMLDivElement>(null);

    // Poll the player for current time every 100ms when playing
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying && playerRef.current) {
            interval = setInterval(async () => {
                const time = await playerRef.current.getCurrentTime();
                setCurrentTime(time);
            }, 100);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const activeIndex = notation.notationLines.findIndex(
        (line) => currentTime >= line.startTime && currentTime < line.endTime
    );

    // Auto-scroll when the active index changes
    useEffect(() => {
        if (activeLineRef.current && containerRef.current && isPlaying) {
            const container = containerRef.current;
            const activeEl = activeLineRef.current;

            const containerHalfHeight = container.clientHeight / 2;
            const elTop = activeEl.offsetTop; // offsetTop is relative to the offsetParent (which is the container)
            const elHalfHeight = activeEl.clientHeight / 2;

            container.scrollTo({
                top: elTop - containerHalfHeight + elHalfHeight,
                behavior: 'smooth'
            });
        }
    }, [activeIndex, isPlaying]);

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        playerRef.current = event.target;
    };

    const onStateChange: YouTubeProps['onStateChange'] = (event) => {
        // 1 = playing, 2 = paused, 0 = ended
        setIsPlaying(event.data === 1);
    };

    const handleLineClick = (startTime: number) => {
        if (playerRef.current) {
            playerRef.current.seekTo(startTime);
            playerRef.current.playVideo();
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 lg:gap-8 items-start">
            {/* Video Player - Sticky on large screens */}
            {notation.videoId && (
                <div className="lg:sticky lg:top-32 w-full aspect-video rounded-2xl overflow-hidden glass border border-white/5 relative z-10 shadow-2xl">
                    <YouTube
                        videoId={notation.videoId}
                        opts={{
                            width: '100%',
                            height: '100%',
                            playerVars: {
                                autoplay: 0,
                                controls: 0,
                                rel: 0,
                                modestbranding: 1,
                                disablekb: 1,
                                fs: 0,
                                playsinline: 1,
                            },
                        }}
                        className="absolute top-0 left-0 w-full h-full"
                        onReady={onPlayerReady}
                        onStateChange={onStateChange}
                    />
                </div>
            )}

            {/* Syncing Notations */}
            <div className="space-y-6">
                <div className="flex items-center space-x-3 text-gold-primary border-b border-gold-primary/10 pb-4">
                    <FileText size={24} />
                    <h2 className="text-2xl font-serif font-bold">Interactive Notations</h2>
                </div>

                <div
                    ref={containerRef}
                    className="relative bg-background/40 rounded-xl p-6 md:p-8 border border-white/5 font-mono text-sm md:text-base leading-relaxed text-foreground/80 lg:max-h-[50vh] overflow-y-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {notation.notationLines.map((line, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={index}
                                ref={isActive ? activeLineRef : null}
                                onClick={() => handleLineClick(line.startTime)}
                                className={`whitespace-pre-wrap py-2 px-2 md:px-4 rounded-lg cursor-pointer transition-all duration-300 border-l-4 ${isActive
                                    ? 'bg-gold-primary/10 border-gold-primary text-gold-primary font-bold shadow-sm scale-[1.01]'
                                    : 'border-transparent hover:bg-white/5 hover:border-white/10'
                                    }`}
                            >
                                {line.text}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
