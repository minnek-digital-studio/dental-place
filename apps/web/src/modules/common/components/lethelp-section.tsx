import { cn } from "@minnek/ui/lib/utils";
import { Image } from "@/modules/common/components/image";
import { Button } from "@minnek/ui/components/button";
import { Typography } from "@minnek/ui/components/typography";
import type { ButtonType, ImageType } from "@/modules/common/types";
import { MoveRight } from "@minnek/ui/icons";
import Link from "next/link";

export type LetUsHelpSectionProps = {
    title: string;
    description: string;
    button: ButtonType;
    img: ImageType;
    className?: string;
};

const LetUsHelpSection = ({
    title,
    description,
    img,
    button,
    className,
}: LetUsHelpSectionProps) => {
    return (
        <section className="container">
            <div
                className={cn(
                    "flex flex-col rounded-[2rem] xmd:flex-row bg-primary/40 mt-6 relative",
                    className,
                )}
            >
                <main className="flex flex-col gap-4 w-full mt-1 xmd:w-[45%] p-8 xmd:p-20 xmd:pr-10">
                    <Typography as="h2">{title}</Typography>
                    <Typography as="p" className="flex-1 leading-8 text-dark">
                        {description}
                    </Typography>
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
                                className="text-dark-foreground"
                            >
                                {button.text}
                            </Typography>
                            <MoveRight size={25} />
                        </Link>
                    </Button>
                </main>
                <picture className="size-full xmd:w-[55%] overflow-visible flex justify-center items-center overflow-x-hidden xmd:absolute xmd:bottom-0 xmd:right-0 xmd:h-[115%] px-8 xmd:px-0">
                    <Image
                        {...img}
                        className={cn(
                            "xmd:w-auto max-w-96 xmd:max-w-none",
                            img.className,
                        )}
                    />
                </picture>
            </div>
        </section>
    );
};

export default LetUsHelpSection;
