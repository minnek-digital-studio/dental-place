import { cn } from "@ui/lib/utils";
import { Image } from "@/modules/common/components/image";
import { Button } from "@ui/components/button";
import { Typography } from "@ui/components/typography";
import type { ButtonType, ImageType, Icon } from "@/modules/common/types";
import { MoveRight } from "@ui/components/icons";
import Link from "@/modules/common/components/link";
import { renderHTML } from "@/modules/common/utils/sanitize-html";

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
    items: _items,
    img,
    description,
    button,
    className,
}: AboutBracesSectionProps) => {
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
                <main className="flex flex-col gap-6 w-full justify-center">
                    <Typography as="h2" className="font-extrabold">
                        {title}
                    </Typography>
                    {description && (
                        <Typography as="p" className="leading-6 text-xl">
                            {renderHTML(description)}
                        </Typography>
                    )}
                    {button?.text && (
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
