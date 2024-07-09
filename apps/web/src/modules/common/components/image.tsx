import { cn } from "@minnek/ui/lib/utils";
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image = ({ className, ...props }: ImageProps) => {
    return (
        <img
            className={cn("w-full h-full object-cover", className)}
            {...props}
        />
    );
};
