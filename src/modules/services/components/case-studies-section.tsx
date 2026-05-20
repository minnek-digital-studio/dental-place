import React from "react";

import CaseCard, { type CaseCardProps } from "./case-studies-card";
import { Typography } from "@ui/components/typography";
import { cn } from "@ui/lib/utils";

export interface CaseStudiesSectionProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    items: CaseCardProps[];
}

const CaseStudiesSection = ({
    title,
    items,
    className,
    ...props
}: CaseStudiesSectionProps) => {
    if (!items.length) return null;

    return (
        <section
            className={cn("bg-info", className)}
            {...props}
            id="case-studies-section"
        >
            <div className="container flex flex-col py-10 gap-10">
                <Typography as="h2" className="max-md:text-center">
                    {title}
                </Typography>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <CaseCard key={`${index}-${item.title}`} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesSection;
