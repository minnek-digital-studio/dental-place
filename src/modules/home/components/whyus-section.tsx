import { cn } from "@ui/lib/utils";
import { Image } from "@/modules/common/components/image";
import { Button } from "@ui/components/button";
import { Typography } from "@ui/components/typography";
import type { ButtonType, ImageType, Icon } from "@/modules/common/types";
import { MoveRight, type IconsName, IconByName } from "@ui/components/icons";
import Link from "@/modules/common/components/link";

export type WhyUsSectionProps = {
    title: string;
    button: ButtonType;
    items: WhyUsItem[];
    img: ImageType;
    className?: string;
};

export type WhyUsItem = {
    title: string;
    description: string;
    icon: Icon;
};

const WhyUsSection = ({
    title,
    items,
    img,
    button,
    className,
}: WhyUsSectionProps) => {
    return (
        <section className="container">
            <div className={cn("flex flex-col md:flex-row", className)}>
                <main className="flex flex-col gap-6 w-full md:w-[60%] pt-10 px-6 md:px-10 md:py-14 md:pr-10">
                    <Typography as="h2">{title}</Typography>
                    <ul className="flex flex-col gap-6">
                        {items?.map((item, index) => (
                            <li key={index} className="flex gap-4">
                                <div className="hidden md:flex">
                                    <IconByName {...item.icon} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Typography
                                        as="h3"
                                        className="text-xl lg:text-xl font-extrabold tracking-normal"
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        as="p"
                                        className="leading-6 max-md:line-clamp-3"
                                    >
                                        {item.description}
                                    </Typography>
                                </div>
                            </li>
                        ))}
                    </ul>
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
                </main>
                <picture className="md:w-[40%] w-full overflow-hidden p-10 max-md:px-6 md:py-14">
                    <Image {...img} />
                </picture>
            </div>
        </section>
    );
};

export default WhyUsSection;
