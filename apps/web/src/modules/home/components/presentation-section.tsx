import type { ImageType } from "@/modules/common/types";
import PresentationCard, {
    type PresentationCardProps,
} from "./presentation-card";
import React from "react";
import { cn } from "@minnek/ui/lib/utils";
import { Image } from "@/modules/common/components/image";
import { Typography } from "@minnek/ui/components/typography";

export interface PresentationSectionProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    img: ImageType;
    card: PresentationCardProps;
}

const PresentationSection = ({
    title,
    description,
    img,
    card,
    className,
    ...props
}: PresentationSectionProps) => {
    return (
        <>
            <section
                className={cn(
                    "flex flex-col justify-center items-center w-full md:mb-14",
                    className,
                )}
                {...props}
            >
                <div className="container relative flex max-md:pt-4 max-md:flex-col gap-5 items-center">
                    <div className="flex flex-wrap justify-center items-center w-full max-md:gap-5">
                        <div className="w-full md:w-[40%] flex flex-col gap-4 md:pb-20">
                            <Typography
                                as="h1"
                                className="font-bold text-black"
                            >
                                {title}
                            </Typography>
                            <Typography as="p" className="text-lg text-black ">
                                {description}
                            </Typography>
                        </div>
                        <picture className="w-[60%] max-md:hidden">
                            <Image {...img} />
                        </picture>
                    </div>
                    <div className="w-[calc(100%-4rem)] max-md:w-full max-md:mb-6 flex justify-center items-center md:absolute top-[calc(100%-3.75rem)]">
                        <PresentationCard {...card} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default PresentationSection;
