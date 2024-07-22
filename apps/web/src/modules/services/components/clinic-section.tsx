import React from "react";

import { Button, type ButtonVariants } from "@minnek/ui/components/button";
import { Typography } from "@minnek/ui/components/typography";
import {
    Carousel,
    CarouselItem,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@minnek/ui/components/carousel";
import { MoveLeft, MoveRight } from "@minnek/ui/icons";
import { ImageType, ButtonType } from "@/modules/common/types";
import { Image } from "@/modules/common/components/image";

export type ClinicSectionProps = {
    title: string;
    description?: string;
    items: ImageType[];
};

const ClinicSection = ({ title, description, items }: ClinicSectionProps) => {
    return (
        <section className="flex flex-col gap-12 items-center py-6 ">
            <header className="flex flex-col gap-4 items-center container">
                <Typography as="h2" className="text-center">
                    {title}
                </Typography>
                {description && (
                    <Typography
                        as="p"
                        className="text-dark-grey max-w-[25rem] text-center "
                    >
                        {description}
                    </Typography>
                )}
            </header>
            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="flex flex-col gap-14 w-full items-center container max-lg:pl-0 max-lg:pr-0 "
            >
                <CarouselContent>
                    {items.map((item, index) => (
                        <CarouselItem
                            className="flex justify-center items-center basis-1/2 md:basis-1/4 lg:basis-1/5"
                            key={index}
                        >
                            <picture className="size-full rounded-xl overflow-hidden">
                                <Image {...item} />
                            </picture>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <div className="flex gap-3">
                    <CarouselPrevious
                        variant="dark"
                        className="static h-auto w-auto p-3"
                    >
                        <MoveLeft />
                    </CarouselPrevious>
                    <CarouselNext
                        variant="dark"
                        className="static h-auto w-auto p-3"
                    >
                        <MoveRight />
                    </CarouselNext>
                </div>
            </Carousel>
        </section>
    );
};

export default ClinicSection;
