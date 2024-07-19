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
                <div className="container relative flex max-md:pt-4">
                    <div className="flex flex-wrap justify-center items-center w-full max-md:gap-5">
                        <div className="w-full md:w-[40%]  flex flex-col gap-4 md:pb-16">
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
                        <picture className="w-full md:w-[60%]">
                            <Image {...img} />
                        </picture>
                    </div>
                    <div className="hidden w-[calc(100%-4rem)] md:flex justify-center items-center md:absolute top-[calc(100%-3.5rem)]">
                        <PresentationCard {...card} />
                    </div>
                </div>
            </section>

            <section className="flex md:hidden w-full justify-center items-center container">
                <PresentationCard {...card} />
            </section>
        </>
    );
};

export default PresentationSection;
