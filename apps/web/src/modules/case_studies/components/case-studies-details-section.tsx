import React from "react";
import { Typography } from "@minnek/ui/components/typography";
import { cn } from "@minnek/ui/lib/utils";
import { Image } from "@/modules/common/components/image";
import { ImageType } from "@/modules/common/types";
export interface CaseStudiesDetailsSectionProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    img: ImageType;
}

const CaseStudiesDetailsSection = ({
    title,
    description,
    img,
    className,
    ...props
}: CaseStudiesDetailsSectionProps) => {
    return (
        <section
            className={cn(
                "bg-gradient-to-b from-primary/40 from-[70%] md:from-[48%] to-0% pt-10 ",
                className,
            )}
            {...props}
        >
            <header className="max-w-[47rem] md:max-w-[55rem] flex flex-col gap-5 text-center container">
                <Typography
                    as="h2"
                    className="leading-[3rem] lg:leading-[3rem]"
                >
                    {title}
                </Typography>
                <Typography as="p" className="text-dark-grey">
                    {description}
                </Typography>
                <div className="w-full flex items-center justify-center mt-5">
                    <picture className="max-w-2xl md:max-w-xl">
                        <Image {...img} className="rounded-2xl" />
                    </picture>
                </div>
            </header>
        </section>
    );
};

export default CaseStudiesDetailsSection;
