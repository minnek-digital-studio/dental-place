import React from "react";
import type { ButtonType, ImageType } from "@/modules/common/types";
import { Image } from "@/modules/common/components/image";
import { cn } from "@minnek/ui/lib/utils";
import { Typography } from "@minnek/ui/components/typography";
import Link from "@/modules/common/components/link";
import { Button } from "@minnek/ui/components/button";
import { IconByName } from "@minnek/ui/icons";

export interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    button: ButtonType;
    images: ImageType[];
}

const HeroSection = ({
    title,
    description,
    button,
    images,
    className,
    ...props
}: HeroSectionProps) => {
    const titleHTML = {
        __html: title,
    };

    return (
        <section className={cn("pt-14 md:py-14", className)} {...props}>
            <div className="container grid grid-cols-1 md:grid-cols-2 sm:px-14 gap-10">
                <main className="flex flex-col gap-6 md:mb-16 mb-10">
                    <Typography
                        as="h1"
                        dangerouslySetInnerHTML={titleHTML}
                        className="flex flex-col md:gap-4 tracking-tight text-[2.4rem] xl:text-5xl"
                    />
                    <Typography as="p" className="text-lg">
                        {description}
                    </Typography>
                    <Button {...button} asChild>
                        <Link href={button.link} aria-label={button.text}>
                            {button.text}
                            <IconByName {...button.icon} />
                        </Link>
                    </Button>
                </main>
                <div
                    className="flex max-md:hidden items-center justify-center"
                    aria-hidden
                >
                    <picture className="relative mt-5 flex w-full max-w-[28rem] h-full">
                        {images.map(({ className, ...image }, index) => (
                            <Image
                                key={index}
                                {...image}
                                className={cn(
                                    "absolute w-[67%] h-[82%] rounded-2xl shadow-[0px_50px_100px_0px_#00000026]",
                                    className,
                                )}
                            />
                        ))}
                    </picture>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
