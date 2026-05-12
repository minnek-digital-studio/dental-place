import { cn } from "@minnek/ui/lib/utils";
import { ImageType } from "../types";
import Link from "@/modules/common/components/link";
import { forwardRef } from "react";

export interface ImageProps
    extends React.ImgHTMLAttributes<HTMLImageElement>,
        ImageType {}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
    ({ className, href, ...props }, ref) => {
        if (href) {
            return (
                <Link className={cn("w-full h-full", className)} href={href}>
                    <img
                        ref={ref}
                        className={cn("w-full h-full object-cover", className)}
                        loading="lazy"
                        {...props}
                    />
                </Link>
            );
        }

        return (
            <img
                ref={ref}
                loading="lazy"
                className={cn("w-full h-full object-cover", className)}
                {...props}
            />
        );
    },
);

Image.displayName = "Image";

export default Image;
