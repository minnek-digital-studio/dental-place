import React from "react";
import ServiceCard, {
    ServiceCardProps,
} from "@/modules/common/components/service-card";
import { Button, type ButtonVariants } from "@minnek/ui/components/button";
import { Typography } from "@minnek/ui/components/typography";
import Link from "next/link";

export type ServiceSectionProps = {
    title: string;
    description: string;
    items: ServiceCardProps[];
    button: buttonProps;
};

export type buttonProps = {
    text: string;
    link: string;
    variant: ButtonVariants["variant"];
    size: ButtonVariants["size"];
};

const ServiceSection = ({
    title,
    description,
    items,
    button,
}: ServiceSectionProps) => {
    return (
        <section className="flex flex-col gap-9 items-center py-6 container">
            <header className="max-w-[30rem] flex flex-col gap-6 text-center">
                <Typography as="h2">{title}</Typography>
                <Typography as="p" className="text-dark-grey">
                    {description}
                </Typography>
            </header>
            <main className="md:flex md:w-full md:flex-row justify-center items-center gap-2 md:flex-wrap grid grid-cols-1 sm:grid-cols-2">
                {items.map((item) => (
                    <ServiceCard key={crypto.randomUUID()} {...item} />
                ))}
            </main>
            <footer>
                <Button
                    variant={button.variant}
                    className="gap-2"
                    size={button.size}
                    asChild
                >
                    <Link
                        href={button.link}
                        className="font-bold w-max"
                        aria-label={button.text}
                    >
                        <Typography as="span" className="text-inherit">
                            {button.text}
                        </Typography>
                    </Link>
                </Button>
            </footer>
        </section>
    );
};

export default ServiceSection;
