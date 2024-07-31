import React from "react";
import { Typography } from "@minnek/ui/components/typography";
import { cn } from "@minnek/ui/lib/utils";
import { Image } from "@/modules/common/components/image";
import { ImageType } from "@/modules/common/types";
export interface ServiceDescriptionSectionProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    subDescription: string;
    beforeImg: ImageTitle;
    afterImg: ImageTitle;
}

export type ImageTitle = {
    title: string;
    img: ImageType;
};

const ServiceDescriptionSection = ({
    title,
    description,
    beforeImg,
    afterImg,
    subDescription,
    className,
    ...props
}: ServiceDescriptionSectionProps) => {
    let descriptionHTML = { __html: "" };
    let subDescriptionHTML = { __html: "" };
    if (description) descriptionHTML = { __html: description };
    if (subDescription) subDescriptionHTML = { __html: subDescription };

    return (
        <section
            className={cn("bg-white py-10 px-5 md:px-10 lg:px-20", className)}
            {...props}
        >
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 mb-[4rem]">
                    <figure className="max-w-2xl max-h-56 md:max-w-3xl">
                        <picture>
                            <Image
                                {...beforeImg.img}
                                className="rounded-2xl mb-2 md:mb-5"
                            />
                        </picture>
                        <Typography
                            as="b"
                            className="text-dark-grey text-center"
                        >
                            {beforeImg.title}
                        </Typography>
                    </figure>
                    <figure className="max-w-2xl max-h-56 md:max-w-3xl">
                        <picture>
                            <Image
                                {...afterImg.img}
                                className="rounded-2xl mb-2 md:mb-5"
                            />
                        </picture>
                        <Typography
                            as="b"
                            className="text-dark-grey text-center"
                        >
                            {afterImg.title}
                        </Typography>
                    </figure>
                </div>
                <Typography
                    as="p"
                    className="text-dark-grey text-justify leading-[1.6rem]"
                    dangerouslySetInnerHTML={subDescriptionHTML}
                />
            </main>
        </section>
    );
};

export default ServiceDescriptionSection;
