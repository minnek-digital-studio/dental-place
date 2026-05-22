import React from "react";
import { Typography } from "@ui/components/typography";
import { Image } from "@/modules/common/components/image";
import { ImageType, CallToAction } from "@/modules/common/types";
import { BreadCrumb } from "@/modules/common/components/breadcrumb";
import CallToActionComp from "@/modules/common/components/CallToAction";
import { RichText } from "@/modules/common/components/rich-text";

export interface ServiceSectionProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subTitle?: string;
    summary: string;
    gallery: ImageType[];
    slug: string;
    description: string;
    callUsAction?: CallToAction;
    img?: ImageType;
    editor?: string;
}

const columnsClass = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
};

const ServiceSection = ({
    title,
    subTitle,
    summary,
    gallery,
    editor,
    img,
    description,
    callUsAction,
    slug,
    content: _content,
    ...props
}: ServiceSectionProps) => {
    const links = [
        {
            href: "/",
            text: "Inicio",
        },
        {
            href: "/services",
            text: "Servicios",
        },
        {
            href: `/services/${slug}`,
            text: title,
            active: true,
        },
    ];

    return (
        <section
            {...props}
            className="bg-gradient-to-b from-secondary/40 from-[15%] to-[0%]"
        >
            <div className="flex flex-col gap-9 items-center py-6 container pb-10">
                <header className="max-w-[50rem] flex flex-col gap-6 text-center items-center">
                    <Typography as="h2">{title}</Typography>
                    <BreadCrumb links={links} />
                    <Typography as="p" className="text-dark-grey">
                        {summary}
                    </Typography>
                </header>
                <main className="w-full max-w-[55rem] flex flex-col gap-9">
                    {gallery?.length > 0 && (
                        <div
                            className={`grid ${
                                columnsClass[gallery.length]
                            } w-full items-center justify-center gap-6 overflow-hidden`}
                        >
                            {gallery.map((img) => (
                                <picture
                                    key={img.src ?? img.alt}
                                    className="rounded-lg overflow-hidden w-full h-full flex-1"
                                >
                                    <Image {...img} />
                                </picture>
                            ))}
                        </div>
                    )}
                    {editor && (
                        <div className="flex gap-6 max-md:flex-col">
                            <RichText html={editor} />
                        </div>
                    )}

                    {img?.src && (
                        <picture className="h-[30rem] rounded-lg overflow-hidden">
                            <Image {...img} />
                        </picture>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:auto-rows-fr">
                        <div className="flex flex-col gap-6">
                            <h2 className="font-noto-sans text-black text-3xl lg:text-4xl font-bold tracking-tight">
                                {subTitle ? subTitle : "Service Description"}
                            </h2>
                            <div className="flex flex-col gap-6 font-noto-sans text-black text-base">
                                <RichText html={description} />
                            </div>
                        </div>
                        {callUsAction && <CallToActionComp {...callUsAction} />}
                    </div>
                </main>
            </div>
        </section>
    );
};

export default ServiceSection;
