import { cn } from "@minnek/ui/lib/utils";
import { Image } from "@/modules/common/components/image";
import { Button } from "@minnek/ui/components/button";
import { Typography } from "@minnek/ui/components/typography";
import type { ButtonType, ImageType, Icon } from "@/modules/common/types";
import { MoveRight, type IconsName, IconByName } from "@minnek/ui/icons";
import Link from "next/link";

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
            <div
                className={cn(
                    "flex flex-col md:flex-row container pl-0 pr-0",
                    className,
                )}
            >
                <main className="flex flex-col gap-6 w-full md:w-[60%] p-10 md:py-14 md:pr-10">
                    <Typography
                        as="h2"
                        className="text-2xl lg:text-3xl font-extrabold"
                    >
                        {title}
                    </Typography>
                    <ul className="flex flex-col gap-6">
                        {items.map((item, index) => (
                            <li key={index} className="flex gap-4">
                                <div>
                                    <IconByName {...item.icon} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Typography
                                        as="h3"
                                        className="text-xl lg:text-xl font-extrabold tracking-normal"
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography as="p" className="leading-6">
                                        {item.description}
                                    </Typography>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Button
                        variant={button.variant}
                        className="gap-2 w-min"
                        size={button.size}
                        aria-label={button.text}
                        asChild
                    >
                        <Link href={button.link} className="font-bold">
                            <span>{button.text}</span>
                            <MoveRight size={25} />
                        </Link>
                    </Button>
                </main>
                <picture className="md:w-[40%] w-full overflow-hidden p-10 py-14">
                    <Image {...img} />
                </picture>
            </div>
        </section>
    );
};

export default WhyUsSection;
