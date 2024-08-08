import { ImageType } from "@/modules/common/types";
import { Image } from "@/modules/common/components/image";
import { Typography } from "@minnek/ui/components/typography";
import { cn } from "@minnek/ui/lib/utils";

export interface ArsSectionProps
    extends React.BaseHTMLAttributes<HTMLDivElement> {
    title: string;
    images: ImageType[];
}

const ArsSection = ({
    title,
    images,
    className,
    ...props
}: ArsSectionProps) => {
    return (
        <section
            className={cn(
                "flex gap-8 w-full items-center justify-center md:flex-row flex-col md:text-left text-center container",
                className,
            )}
            {...props}
        >
            <Typography as="h3" className="text-xl lg:text-xl font-extrabold">
                {title}
            </Typography>
            <div className="flex gap-4 items-start justify-center flex-wrap md:flex-nowrap">
                {images.map(({ className, ...image }) => (
                    <picture
                        className={cn(
                            "h-20 max-w-40 md:h-28 md:max-w-52",
                            className,
                        )}
                    >
                        <Image
                            key={crypto.randomUUID()}
                            {...image}
                            className="object-contain"
                        />
                    </picture>
                ))}
            </div>
        </section>
    );
};

export default ArsSection;
