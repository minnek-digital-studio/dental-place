import React from "react";

import CaseCard, { type CaseCardProps } from "./case-studies-card";
import { Typography } from "@minnek/ui/components/typography";
import { cn } from "@minnek/ui/lib/utils";

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
    return (
        <section className={cn("bg-info", className)} {...props}>
            <div className="container flex flex-col py-10 gap-10">
                <Typography as="h2">{title}</Typography>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <CaseCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesSection;
