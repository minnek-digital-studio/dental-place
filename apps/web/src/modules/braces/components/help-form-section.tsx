import React from "react";
import HelpForm from "./help-form";
import { Typography } from "@minnek/ui/components/typography";
import { type HelpFormProps } from "./help-form";
import { cn } from "@minnek/ui/lib/utils";

export interface HelpFormSectionProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    form: HelpFormProps;
}

const HelpFormSection = ({
    title,
    description,
    form,
    className,
    ...props
}: HelpFormSectionProps) => {
    return (
        <section className="container">
            <div
                className={cn(
                    "bg-primary/40 flex md:flex-row flex-col px-16 py-8 rounded-3xl md:justify-center md:items-center my-32  md:gap-16 lg:gap-20",
                    className,
                )}
                {...props}
            >
                <div className="flex flex-col gap-6 md:mb-10">
                    <Typography as="h2" className="font-extrabold">
                        {title}
                    </Typography>
                    <Typography as="p">{description}</Typography>
                </div>
                <HelpForm {...form} />
            </div>
        </section>
    );
};

export default HelpFormSection;
