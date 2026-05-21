import { cn } from "@ui/lib/utils";
import { Image } from "@/modules/common/components/image";
import { Button } from "@ui/components/button";
import { Typography } from "@ui/components/typography";
import type { ButtonType, ImageType, Icon } from "@/modules/common/types";
import { MoveRight, IconByName } from "@ui/components/icons";
import Link from "@/modules/common/components/link";

export type WhyBracesSectionProps = {
    title: string;
    button?: ButtonType;
    description?: string;
    items: WhyBracesItem[];
    img: ImageType;
    className?: string;
};

export type WhyBracesItem = {
    title: string;
    description?: string;
    icon: Icon;
};

const WhyBracesSection = ({
    title,
    items,
    img,
    description,
    button,
    className,
}: WhyBracesSectionProps) => {
    return (
        <section className={cn("", className)}>
            <div
                className={cn(
                    "grid grid-cols-1 md:grid-cols-2 gap-10 container py-10 md:py-14",
                )}
            >
                <main className="flex flex-col gap-6 w-full pt-10 md:py-14">
                    <Typography as="h2" className="font-extrabold">
                        {title}
                    </Typography>
                    {description && (
                        <Typography as="p" className="leading-6 text-xl">
                            {description}
                        </Typography>
                    )}
                    <ul className="flex flex-col gap-6">
                        {items.map((item, index) => (
                            <li key={index} className="flex gap-4 items-center">
                                <div className="bg-[#28AF77] rounded-full size-7 md:size-8 flex items-center justify-center">
                                    <IconByName {...item.icon} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Typography
                                        as="h3"
                                        className="text-xl lg:text-xl font-extrabold tracking-normal"
                                    >
                                        {item.title}
                                    </Typography>
                                    {item.description && (
                                        <Typography
                                            as="p"
                                            className="leading-6"
                                        >
                                            {item.description}
                                        </Typography>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
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
                <picture className="max-md:max-w-sm max-md:m-auto md:w-auto h-full max-h-[33rem]">
                    <Image {...img} />
                </picture>
            </div>
        </section>
    );
};

export default WhyBracesSection;
