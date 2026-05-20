import { cn } from "@ui/lib/utils";

export interface GoogleMapsProps {
    className?: string;
    src: string;
}

const GoogleMaps = ({ className, src }: GoogleMapsProps) => {
    return (
        <iframe
            className={cn("h-full w-full border-none rounded-3xl", className)}
            src={src}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );
};

export default GoogleMaps;
