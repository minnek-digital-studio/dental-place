import React from "react";
import { Typography } from "@minnek/ui/components/typography";
import { Image } from "@/modules/common/components/image";
import { Button } from "@minnek/ui/components/button";
import { IconByName } from "@minnek/ui/components/icons/index";
import Link from "next/link";

interface ServiceSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    content: string;
}

const ServiceSection = ({
    title,
    description,
    content,
    ...props
}: ServiceSectionProps) => {
    const contentHTML = {
        __html: content,
    };
    return (
        <section
            {...props}
            className="bg-gradient-to-b from-secondary/40 from-[15rem] to-[0%]"
        >
            <div className="flex flex-col gap-9 items-center py-6 container pb-10">
                <header className="max-w-[50rem] flex flex-col gap-6 text-center">
                    <Typography as="h2">{title}</Typography>
                    <Typography as="p" className="text-dark-grey">
                        {description}
                    </Typography>
                </header>
                <main
                    className="w-full flex flex-col gap-9"
                    dangerouslySetInnerHTML={contentHTML}
                ></main>
            </div>
        </section>
    );
};

export default ServiceSection;
