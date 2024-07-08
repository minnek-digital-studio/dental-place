import React from "react";
import ServiceCard, {
    ServiceCardProps,
} from "@/modules/common/components/service-card";
import { Button } from "@minnek/ui/components/button";
import { Typography } from "@minnek/ui/components/typography";

export type ServiceSectionProps = {
    title: string;
    description: string;
    items: ServiceCardProps[];
    button: buttonProps;
};

type buttonProps = {
    text: string;
    link: string;
};

const ServiceSection = ({
    title,
    description,
    items,
    button,
}: ServiceSectionProps) => {
    return (
        <section className="flex flex-col gap-12 items-center py-6 px-4">
            <header className="max-w-[30rem] flex flex-col gap-6 text-center">
                <Typography as="h2">{title}</Typography>
                <Typography as="p">{description}</Typography>
            </header>
            <main className="flex w-full justify-center gap-2">
                {items.map((item) => (
                    <ServiceCard key={crypto.randomUUID()} {...item} />
                ))}
            </main>
            <footer>
                <Typography as="a" href={button.link} className="font-bold">
                    <Button variant="secondary" size="default">
                        {button.text}
                    </Button>
                </Typography>
            </footer>
        </section>
    );
};

export default ServiceSection;
