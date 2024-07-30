import { cn } from "@minnek/ui/lib/utils";
import { Image } from "@/modules/common/components/image";
import { Button } from "@minnek/ui/components/button";
import { Typography } from "@minnek/ui/components/typography";
import type { ButtonType, ImageType, Icon } from "@/modules/common/types";
import { MoveRight, type IconsName, IconByName } from "@minnek/ui/icons";
import Link from "next/link";

export type AboutBracesSectionProps = {
    title: string;
    button?: ButtonType;
    description?: string;
    items: AboutBracesItem[];
    img: ImageType;
    className?: string;
};

export type AboutBracesItem = {
    title: string;
    description?: string;
    icon: Icon;
};

const AboutBracesSection = ({
    title,
    items,
    img,
    description,
    button,
    className,
}: AboutBracesSectionProps) => {
    let descriptionHTML = { __html: "" };
    if (description) descriptionHTML = { __html: description };

    return (
        <section className={cn("md:py-14", className)}>
            <div
                className={cn(
                    "grid grid-cols-1 md:grid-cols-2 gap-16 container",
                )}
            >
                <picture className="max-md:max-w-sm max-md:m-auto md:w-auto h-full max-h-[33rem] max-md:order-2">
                    <Image {...img} />
                </picture>
                <main className="flex flex-col gap-6 w-full md:pt-10 md:py-14">
                    <Typography as="h2" className="font-extrabold">
                        {title}
                    </Typography>
                    {description && (
                        <Typography
                            as="p"
                            className="leading-6 text-xl"
                            dangerouslySetInnerHTML={descriptionHTML}
                        />
                    )}
                    {button && (
                        <Button
                            variant={button.variant}
                            className="gap-2 h-12"
                            size={button.size}
                            asChild
                        >
                            <Link
                                href={button.link}
                                className="font-bold w-max"
                                aria-label={button.text}
                            >
                                <Typography as="span">{button.text}</Typography>
                                <MoveRight size={25} />
                            </Link>
                        </Button>
                    )}
                </main>
            </div>
        </section>
    );
};

export default AboutBracesSection;
