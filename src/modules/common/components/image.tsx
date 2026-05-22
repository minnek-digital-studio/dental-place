import { cn } from "@ui/lib/utils";
import { ImageType } from "../types";
import Link from "@/modules/common/components/link";
import NextImage from "next/image";
import { forwardRef } from "react";

export interface ImageProps extends ImageType {
    width?: number;
    height?: number;
    className?: string;
    sizes?: string;
    priority?: boolean;
    quality?: number;
}

export const Image = forwardRef<HTMLDivElement, ImageProps>(
    (
        {
            className,
            href,
            alt = "",
            src,
            width = 100,
            height = 100,
            sizes,
            priority,
            quality,
        },
        ref,
    ) => {
        if (!src) return null;

        const image = (
            <NextImage
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={cn("w-full h-full object-cover", className)}
                sizes={sizes}
                priority={priority}
                quality={quality}
            />
        );

        if (href) {
            return (
                <Link className={cn("w-full h-full", className)} href={href}>
                    <div ref={ref}>{image}</div>
                </Link>
            );
        }

        return <div ref={ref}>{image}</div>;
    },
);

Image.displayName = "Image";

export default Image;
