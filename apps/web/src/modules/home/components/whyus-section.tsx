import { cn } from "@minnek/ui/lib/utils";
import { Image } from "@/modules/common/components/image";
import { Button } from "@minnek/ui/components/button";
import { Typography } from "@minnek/ui/components/typography";
import type { ButtonType, ImageType, Icon } from "@/modules/common/types";
import { MoveRight, type IconsName, IconByName } from "@minnek/ui/icons";

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
                <header className="flex flex-col gap-6 w-full md:w-[60%] p-10 md:py-14 md:pr-10">
                    <Typography as="h3">{title}</Typography>
                    <ul className="flex flex-col gap-6">
                        {items.map((item, index) => (
                            <li key={index} className="flex gap-4">
                                <div>
                                    <IconByName {...item.icon} />
                                </div>
                                <div className="flex flex-col">
                                    <Typography as="h4">
                                        {item.title}
                                    </Typography>
                                    <Typography as="p">
                                        {item.description}
                                    </Typography>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Typography as="a" href={button.link} className="font-bold">
                        <Button
                            variant={button.variant}
                            className="gap-2"
                            size={button.size}
                        >
                            <span>{button.text}</span>
                            <MoveRight size={25} />
                        </Button>
                    </Typography>
                </header>
                <main className="md:w-[40%] w-full overflow-hidden p-10 py-14">
                    <Image {...img} />
                </main>
            </div>
        </section>
    );
};

export default WhyUsSection;
