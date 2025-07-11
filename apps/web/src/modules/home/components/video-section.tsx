import { type PresentationSectionProps } from "@/modules/home/components/presentation-section";

export const VideoSection = ({
    video,
    mediaType,
}: PresentationSectionProps) => {
    if (mediaType !== "video") return null;
    return (
        <video
            preload="auto"
            aria-label={video?.alt || "Dental Video"}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover filter brightness-[0.75]"
        >
            <source
                src={video?.src || "/videos/dental_video.mp4"}
                type="video/mp4"
            />
        </video>
    );
};
