import { cn } from "@minnek/ui/lib/utils";
import { ImageType } from "../types";
import Link from "next/link";
export interface ImageProps
    extends React.ImgHTMLAttributes<HTMLImageElement>,
        ImageType {}

export const Image = ({ className, href, ...props }: ImageProps) => {
    if (href) {
        return (
            <Link className="w-full h-full" href={href}>
                <img
                    className={cn("w-full h-full object-cover", className)}
                    {...props}
                />
            </Link>
        );
    }

    return (
        <img
            className={cn("w-full h-full object-cover", className)}
            {...props}
        />
    );
};
