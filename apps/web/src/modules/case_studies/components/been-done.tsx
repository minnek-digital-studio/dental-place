import React from "react";
import { Typography } from "@minnek/ui/components/typography";
import { cn } from "@minnek/ui/lib/utils";
import { Image } from "@/modules/common/components/image";
import { Icon, ImageType } from "@/modules/common/types";
import { IconByName } from "@minnek/ui/components/icons/index";
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
    let descriptionHTML = { __html: "" };
    if (description) descriptionHTML = { __html: description };

    return (
        <section className={cn("bg-white mb-16", className)} {...props}>
            <main className="max-w-[47rem] md:max-w-[55rem] flex flex-col gap-3 text-center container">
                <Typography
                    as="h2"
                    className="leading-[3rem] lg:leading-[3rem] text-left text-xl lg:text-2xl"
                >
                    {title}
                </Typography>
                {description && (
                    <Typography
                        as="p"
                        className="text-dark-grey text-justify leading-[1.6rem]"
                        dangerouslySetInnerHTML={descriptionHTML}
                    />
                )}
                <ul className="flex flex-col gap-4 grid md:grid-cols-2 mt-3">
                    {itemsIcons.map((item, index) => (
                        <li key={index} className="flex gap-4 items-center">
                            <div className="bg-[#28AF77] rounded-full size-5 md:size-6 flex items-center justify-center">
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
