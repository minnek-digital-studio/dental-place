import React from "react";
import ServiceCard, {
    ServiceCardProps,
} from "@/modules/common/components/service-card";
import { Button, type ButtonVariants } from "@minnek/ui/components/button";
import { Typography } from "@minnek/ui/components/typography";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@minnek/ui/components/carousel";
import { cn } from "@minnek/ui/lib/utils";

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
            <main className="flex w-full overflow-hidden md:justify-center">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                >
                    <CarouselContent>
                        {items.map(({ className, ...item }, index) => {
                            if (index > 2) return null;
                            return (
                                <CarouselItem
                                    key={crypto.randomUUID()}
                                    className="flex justify-center items-center basis-[38%] md:basis-1/3"
                                >
                                    <ServiceCard
                                        {...item}
                                        className={cn("bg-info", className)}
                                    />
                                </CarouselItem>
                            );
                        })}
                        <CarouselItem className="flex justify-center items-center basis-[43%] md:hidden">
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
                                    <Typography
                                        as="span"
                                        className="text-inherit"
                                    >
                                        {button.text}
                                    </Typography>
                                </Link>
                            </Button>
                        </CarouselItem>

                        <CarouselItem className="flex justify-center items-center md:hidden">
                            <div></div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </main>
            <footer className="max-md:hidden">
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
