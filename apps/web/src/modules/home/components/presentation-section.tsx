import type { ImageType } from "@/modules/common/types";
import PresentationCard, {
    type PresentationCardProps,
} from "./presentation-card";
import React from "react";
import { cn } from "@minnek/ui/lib/utils";
import { Image } from "@/modules/common/components/image";
import { Typography } from "@minnek/ui/components/typography";

import Buttons from "@/modules/home/components/buttons";

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
                    "flex flex-col justify-center items-center w-full md:mb-14 h-full flex-1",
                    className,
                    "bg-transparent filter",
                )}
                {...props}
            >
                <div className="container relative flex max-md:pt-4 flex-col gap-5 items-start">
                    <div className="flex flex-wrap justify-start items-center w-full max-md:gap-5">
                        <div className="w-full md:w-[50%] flex flex-col gap-4 filter">
                            <Typography
                                as="h1"
                                className="font-medium text-white xl:text-5xl lg:text-5xl"
                            >
                                {title}
                            </Typography>
                            <Typography as="p" className="text-lg text-white">
                                {description}
                            </Typography>
                            <div className="flex justify-start items-start">
                                <Buttons buttons={card.buttons} />
                            </div>
                        </div>
                        <picture className="w-[60%] hidden">
                            <Image {...img} />
                        </picture>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PresentationSection;
