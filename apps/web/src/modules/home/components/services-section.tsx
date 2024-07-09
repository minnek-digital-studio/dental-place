import React from "react";
import ServiceCard, {
    ServiceCardProps,
} from "@/modules/common/components/service-card";
import { Button, type ButtonVariants } from "@minnek/ui/components/button";
import { Typography } from "@minnek/ui/components/typography";

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
        <section className="flex flex-col gap-12 items-center py-6">
            <header className="max-w-[30rem] flex flex-col gap-6 text-center">
                <Typography as="h2">{title}</Typography>
                <Typography as="p">{description}</Typography>
            </header>
            <main className="flex w-full flex-col md:flex-row justify-center items-center gap-2 md:flex-wrap">
                {items.map((item) => (
                    <ServiceCard key={crypto.randomUUID()} {...item} />
                ))}
            </main>
            <footer>
                <Button variant={button.variant} size={button.size} asChild>
                    <Typography as="a" href={button.link} className="font-bold">
                        {button.text}
                    </Typography>
                </Button>
            </footer>
        </section>
    );
};

export default ServiceSection;
