import { cn } from "@minnek/ui/lib/utils";
import { Image } from "@/modules/common/components/image";
import { Button } from "@minnek/ui/components/button";
import { Typography } from "@minnek/ui/components/typography";
import type { ButtonType, ImageType } from "@/modules/common/types";
import { MoveRight } from "@minnek/ui/icons";
import Link from "@/modules/common/components/link";

export type HeroSectionProps = {
    title: string;
    description?: string;
    button: ButtonType;
    img: ImageType;
    className?: string;
};

const HeroSection = ({
    title,
    description,
    img,
    button,
    className,
}: HeroSectionProps) => {
    return (
        <section className="container max-xl:pl-0 max-xl:pr-0">
            <div
                className={cn(
                    "flex flex-col md:flex-row h-full bg-primary/40",
                    className,
                )}
            >
                <main className="flex flex-col justify-center gap-6 w-full md:w-[70%] p-8 md:p-20 md:pr-0 md:mb-16">
                    <Typography
                        as="h2"
                        className="leading-[3rem] lg:leading-[3rem]"
                    >
                        {title}
                    </Typography>
                    {description && (
                        <Typography as="p" className="leading-8 text-dark">
                            {description}
                        </Typography>
                    )}
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
                            <MoveRight size={25} />
                        </Link>
                    </Button>
                </main>
                <picture className="overflow-hidden md:w-[50%] flex justify-end items-end">
                    <Image {...img} className="h-auto" />
                </picture>
            </div>
        </section>
    );
};

export default HeroSection;
