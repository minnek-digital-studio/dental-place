import { type PresentationSectionProps } from "@/modules/home/components/presentation-section";

export const VideoSection = ({
    img,
    video,
    mediaType,
}: PresentationSectionProps) => {
    if (mediaType !== "video") return null;
    return (
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black/40" />
            <video
                preload="auto"
                aria-label={video?.alt || "Dental Video"}
                autoPlay
                loop
                muted
                playsInline
                poster={img?.src}
                className="absolute inset-0 h-full w-full object-cover filter brightness-[0.75]"
            >
                <source
                    src={video?.src || "/videos/dental_video.mp4"}
                    type="video/mp4"
                />
            </video>
        </div>
    );
};
