import React from "react";
import { Typography } from "@ui/components/typography";
import { cn } from "@ui/lib/utils";
import { Icon } from "@/modules/common/types";
import { IconByName } from "@ui/components/icons";
import { renderHTML } from "@/modules/common/utils/sanitize-html";
export interface BeenDoneSectionProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    itemsIcons: BeenDoneItem[];
}

export type BeenDoneItem = {
    title: string;
    description?: string;
    icon: Icon;
};

const BeenDoneSection = ({
    title,
    description,
    itemsIcons,
    className,
    ...props
}: BeenDoneSectionProps) => {
    return (
        <section className={cn("bg-white md:mb-16", className)} {...props}>
            <main className="max-w-[47rem] md:max-w-[55rem] flex flex-col gap-3 text-center container">
                <Typography
                    as="h2"
                    className="lg:leading-[3.8rem] text-left text-2xl md:text-[1.7rem] lg:text-[1.7rem] leading-[1.75rem] md:leading-[3.8rem]"
                >
                    {title}
                </Typography>
                {description && (
                    <Typography
                        as="p"
                        className="text-dark-grey text-start leading-[1.6rem]"
                    >
                        {renderHTML(description)}
                    </Typography>
                )}
                <ul className="max-md:flex flex-col gap-4 md:gap-6 grid md:grid-cols-2 mt-3">
                    {itemsIcons.map((item) => (
                        <li key={item.title} className="flex gap-4 items-center">
                            <div className="bg-[#28AF77] rounded-full size-5 md:size-6 flex items-center justify-center">
                                <IconByName {...item.icon} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Typography
                                    as="h3"
                                    className="text-base font-extrabold tracking-normal"
                                >
                                    {item.title}
                                </Typography>
                                {item.description && (
                                    <Typography as="p" className="leading-6">
                                        {item.description}
                                    </Typography>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </section>
    );
};

export default BeenDoneSection;
