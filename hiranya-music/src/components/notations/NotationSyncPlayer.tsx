"use client";

import React, { useState, useEffect, useRef } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import type { Notation } from '@/constants/notations';
import { FileText, Play, Pause, Rewind, FastForward } from 'lucide-react';

interface NotationSyncPlayerProps {
    notation: Notation;
}

export default function NotationSyncPlayer({ notation }: NotationSyncPlayerProps) {
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);
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
        event.target.setPlaybackRate(playbackRate);
    };

    const onStateChange: YouTubeProps['onStateChange'] = (event) => {
        // 1 = playing, 2 = paused, 0 = ended
        setIsPlaying(event.data === 1);
    };

    const togglePlay = () => {
        if (playerRef.current) {
            if (isPlaying) {
                playerRef.current.pauseVideo();
            } else {
                playerRef.current.playVideo();
            }
        }
    };

    const seekBackward = async () => {
        if (playerRef.current) {
            const time = await playerRef.current.getCurrentTime();
            playerRef.current.seekTo(Math.max(0, time - 5));
        }
    };

    const seekForward = async () => {
        if (playerRef.current) {
            const time = await playerRef.current.getCurrentTime();
            const duration = await playerRef.current.getDuration();
            playerRef.current.seekTo(Math.min(duration, time + 5));
        }
    };

    const toggleSpeed = () => {
        if (playerRef.current) {
            const nextSpeed = playbackRate === 1 ? 0.75 : playbackRate === 0.75 ? 0.5 : 1;
            playerRef.current.setPlaybackRate(nextSpeed);
            setPlaybackRate(nextSpeed);
        }
    };

    const handleLineClick = (startTime: number) => {
        if (playerRef.current) {
            playerRef.current.seekTo(startTime);
            playerRef.current.playVideo();
        }
    };

    const formatNotationText = (text: string) => {
        return text.split('\n').map((row, idx) => {
            if (!row.trim()) {
                return <div key={idx} className="h-2"></div>;
            }
            const parts = row.split('|');
            // If there are exactly 4 columns (5 parts when split by '|' if it ends with '|')
            if (parts.length === 5) {
                return (
                    <div key={idx} className="leading-loose md:leading-relaxed">
                        <span className="block md:inline whitespace-nowrap md:whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: `${parts[0]}|${parts[1]}|` }} />
                        <span className="block md:inline whitespace-nowrap md:whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: `${parts[2].replace(/^\s+/, '')}|${parts[3]}|` }} />
                    </div>
                );
            }
            // If there are exactly 3 columns (4 parts when split by '|' if it ends with '|')
            if (parts.length === 4) {
                return (
                    <div key={idx} className="leading-loose md:leading-relaxed">
                        <span className="block md:inline whitespace-nowrap md:whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: `${parts[0]}|${parts[1]}|` }} />
                        <span className="block md:inline whitespace-nowrap md:whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: `${parts[2].replace(/^\s+/, '')}|` }} />
                    </div>
                );
            }
            return <div key={idx} className="whitespace-nowrap md:whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: row }} />;
        });
    };

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 lg:gap-8 items-start">
                {/* Video Player - Sticky on large screens */}
                {notation.videoId && (
                    <div className="lg:sticky lg:top-32 space-y-4">
                        <div className="w-full aspect-video rounded-2xl overflow-hidden glass border border-white/5 relative z-10 shadow-2xl">
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

                        {/* Custom Controls */}
                        <div className="flex items-center justify-center gap-4 bg-background/40 glass p-3 rounded-xl border border-white/5 shadow-lg relative z-10">
                            <button onClick={seekBackward} className="p-2 hover:bg-white/10 rounded-full transition-colors text-foreground/80 hover:text-gold-primary" title="Rewind 5s">
                                <Rewind size={20} />
                            </button>
                            <button onClick={togglePlay} className="p-3 bg-gold-primary/20 text-gold-primary hover:bg-gold-primary/30 rounded-full transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                            </button>
                            <button onClick={seekForward} className="p-2 hover:bg-white/10 rounded-full transition-colors text-foreground/80 hover:text-gold-primary" title="Forward 5s">
                                <FastForward size={20} />
                            </button>
                            <div className="w-px h-6 bg-white/10 mx-2"></div>
                            <button onClick={toggleSpeed} className="w-12 py-1.5 hover:bg-white/10 rounded-lg transition-colors text-sm font-medium text-foreground/80 hover:text-gold-primary flex items-center justify-center gap-1 border border-white/5" title="Playback Speed">
                                <span>{playbackRate}x</span>
                            </button>
                        </div>
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
                        className="relative bg-background/40 rounded-xl p-6 md:p-8 border border-white/5 font-mono text-xs sm:text-sm md:text-base leading-relaxed text-foreground/80 max-h-[35vh] lg:max-h-[50vh] overflow-y-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                                    {formatNotationText(line.text)}
                                </div>
                            );
                        })}


                    </div>

                </div>

            </div>

        </>
    );
}
