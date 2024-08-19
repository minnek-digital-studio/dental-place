import React from "react";
import { Typography } from "@minnek/ui/components/typography";
import { Image } from "@/modules/common/components/image";
import { Button } from "@minnek/ui/components/button";
import { IconByName } from "@minnek/ui/components/icons/index";
import Link from "next/link";
import { BreadCrumb } from "@/modules/common/components/breadcrumb";

interface ServiceSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    slug: string;
    description: string;
    content?: string;
}

const ServiceSection = ({
    title,
    description,
    slug,
    content,
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
                        {description}
                    </Typography>
                </header>
                <main className="w-full max-w-[55rem] flex flex-col gap-9">
                    <div className="grid grid-cols-3 w-full items-center justify-center gap-6 overflow-hidden">
                        <picture className="rounded-lg overflow-hidden w-full h-full flex-1">
                            <Image
                                src="https://dentalplace.minnekdigital.com/wp-content/uploads/2024/08/service-1.webp"
                                alt="Dental"
                            />
                        </picture>
                        <picture className="rounded-lg overflow-hidden w-full h-full flex-1">
                            <Image
                                src="https://dentalplace.minnekdigital.com/wp-content/uploads/2024/08/clinic-1.webp"
                                alt="Clinic"
                            />
                        </picture>
                        <picture className="rounded-lg overflow-hidden w-full h-full flex-1">
                            <Image
                                src="https://dentalplace.minnekdigital.com/wp-content/uploads/2024/08/service-2.webp"
                                alt="Dental"
                            />
                        </picture>
                    </div>
                    <div className="flex gap-6 max-md:flex-col ">
                        <p>
                            Lörem ipsum ogooglebar paratenat antiprepal. Soderat
                            saling supranedusaska, prede. Lörem ipsum ogooglebar
                            paratenat
                            <br />
                            antiprepal. Lörem ipsum ogooglebar
                        </p>
                        <p>
                            Lörem ipsum ogooglebar paratenat antiprepal. Soderat
                            saling supranedusaska, prede. Lörem ipsum ogooglebar
                            paratenat
                            <br />
                            antiprepal. Lörem ipsum ogooglebar
                        </p>
                    </div>
                    <picture className="h-[30rem] rounded-lg overflow-hidden">
                        <img
                            decoding="async"
                            className="w-full h-full object-cover"
                            src="https://dentalplace.minnekdigital.com/wp-content/uploads/2024/08/service-3.webp"
                            alt="Dental"
                        />
                    </picture>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:auto-rows-fr">
                        <div className="flex flex-col gap-6">
                            <h2 className="font-noto-sans text-black text-3xl lg:text-4xl font-bold tracking-tight">
                                Service Description
                            </h2>
                            <p className="font-noto-sans text-black text-base">
                                Lörem ipsum ogooglebar paratenat antiprepal.
                                Soderat saling supranedusaska, prede. Lörem
                                ipsum ogooglebar paratenat antiprepal. Lörem
                                ipsum ogooglebar paratenat antiprepal. Soderat
                                saling supranedusaska, prede. Lörem ipsum
                                ogooglebar paratenat antiprepal.
                            </p>
                            <p className="font-noto-sans text-black text-base">
                                Lörem ipsum ogooglebar paratenat antiprepal.
                                Soderat saling supranedusaska, prede. Lörem
                                ipsum ogooglebar paratenat antiprepal. Lörem
                                ipsum ogooglebar paratenat antiprepal. Soderat
                                saling supranedusaska, prede. Lörem ipsum
                                ogooglebar paratenat antiprepal.
                            </p>
                        </div>
                        <div className="bg-secondary/40 rounded-3xl flex flex-col gap-3 p-11">
                            <h3 className="font-noto-sans text-black tracking-tight text-xl lg:text-xl font-extrabold leading-none">
                                Get Free Appointment
                            </h3>
                            <p className="font-noto-sans text-black text-base">
                                Lörem ipsum suprahåt diss teteda trina. Väliga
                                beröde för sars. Lörem
                                <br />
                                ipsum suprahåt diss teteda trina. Väliga beröde
                                för sars.
                            </p>
                            <div className="flex flex-col">
                                <p className="font-noto-sans text-black text-base">
                                    Call Us Now
                                </p>
                                <p>
                                    <span className="font-noto-sans text-black tracking-tight text-2xl lg:text-2xl font-extrabold">
                                        (809) 581-8686
                                    </span>
                                </p>
                            </div>
                            <Button
                                variant={"dark"}
                                size={"lg"}
                                className="w-full max-w-max pl-4"
                                asChild
                            >
                                <Link
                                    href="tel:+18095818686"
                                    className="text-wrap"
                                >
                                    <IconByName name="WhatsApp" size={20} />
                                    Make An Appointment
                                    <IconByName name="MoveRight" size={24} />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default ServiceSection;
