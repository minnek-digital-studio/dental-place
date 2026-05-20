import React from "react";
import { Typography } from "@ui/components/typography";
import { cn } from "@ui/lib/utils";
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
                "bg-gradient-to-b from-primary/40 from-[65%] md:from-[40%] to-0% pt-10 ",
                className,
            )}
            {...props}
        >
            <main className="max-w-[55rem] md:max-w-[65rem] flex flex-col gap-5 text-center container">
                <Typography
                    as="h1"
                    className="leading-[3rem] lg:leading-[3rem] xl:text-4xl"
                >
                    {title}
                </Typography>
                <Typography as="p" className="text-dark-grey">
                    {description}
                </Typography>
                <div className="w-full flex items-center justify-center mt-5">
                    <picture className="max-w-2xl md:max-w-[52rem]">
                        <Image {...img} className="rounded-2xl" />
                    </picture>
                </div>
            </main>
        </section>
    );
};

export default CaseStudiesDetailsSection;
