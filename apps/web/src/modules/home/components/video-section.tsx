"use client";

import { type PresentationSectionProps } from "@/modules/home/components/presentation-section";
import { Image } from "@/modules/common/components/image";
import { useEffect, useRef, useState } from "react";

export const VideoSection = ({
    img,
    video,
    mediaType,
}: PresentationSectionProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showFallbackImage, setShowFallbackImage] = useState(true);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (!videoElement) return;

        const playVideo = async () => {
            try {
                await videoElement.play();
            } catch {
                setShowFallbackImage(true);
            }
        };

        void playVideo();
    }, []);

    if (mediaType !== "video") return null;
    return (
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black/40" />
            {showFallbackImage && (
                <picture className="absolute inset-0 md:hidden">
                    <Image
                        {...img}
                        className="h-full w-full object-cover"
                    />
                </picture>
            )}
            <video
                ref={videoRef}
                preload="auto"
                aria-label={video?.alt || "Dental Video"}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover filter brightness-[0.75]"
                onPlaying={() => setShowFallbackImage(false)}
                onCanPlay={() => setShowFallbackImage(false)}
                onError={() => setShowFallbackImage(true)}
            >
                <source
                    src={video?.src || "/videos/dental_video.mp4"}
                    type="video/mp4"
                />
            </video>
        </div>
    );
};
