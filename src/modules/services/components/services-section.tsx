import React from "react";
import ServiceCard, {
    ServiceCardProps,
} from "@/modules/common/components/service-card";
import { Button, type ButtonVariants } from "@ui/components/button";
import { Typography } from "@ui/components/typography";
import Link from "@/modules/common/components/link";
import { IconByName } from "@ui/components/icons";
import { type ButtonType } from "@/modules/common/types";

export type buttonProps = {
    text: string;
    link: string;
    variant: ButtonVariants["variant"];
    size: ButtonVariants["size"];
};

export interface ServiceSectionProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    items: ServiceCardProps[];
    button?: ButtonType;
}

const ServiceSection = ({
    title,
    description,
    items,
    button,
    ...props
}: ServiceSectionProps) => {
    return (
        <section {...props}>
            <div className="flex flex-col gap-9 items-center py-6 container pb-10">
                <header className="max-w-[55rem] flex flex-col gap-6 text-center">
                    <Typography as="h2">{title}</Typography>
                    <Typography as="p" className="text-dark-grey">
                        {description}
                    </Typography>
                </header>
                <main className="justify-center items-center gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-fr">
                    {items.map((item, idx) => (
                        <ServiceCard key={item.title ?? idx} {...item} />
                    ))}
                </main>
                {button && (
                    <footer>
                        <Button
                            variant={button.variant}
                            className="gap-2"
                            size={button.size}
                            asChild
                        >
                            <Link
                                href={button.link}
                                className={`font-bold w-max ${button.icon?.position === "left" ? "flex-row-reverse" : "flex-row"}`}
                                aria-label={button.text}
                            >
                                <Typography as="span" className="text-inherit">
                                    {button.text}
                                </Typography>
                                {button.icon && <IconByName {...button.icon} />}
                            </Link>
                        </Button>
                    </footer>
                )}
            </div>
        </section>
    );
};

export default ServiceSection;
