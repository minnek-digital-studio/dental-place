import React from "react";
import { cn } from "@minnek/ui/lib/utils";
import { Label } from "@minnek/ui/components/label";
import { Input } from "@minnek/ui/components/input";
import { Textarea } from "@minnek/ui/components/textarea";
import { Button } from "@minnek/ui/components/button";
import { Card, CardContent, CardHeader } from "@minnek/ui/components/card";
import { Typography } from "@minnek/ui/components/typography";
import { IconByName, IconsName } from "@minnek/ui/components/icons/index";
import { NavBar } from "@/modules/common/components/navbar";
import Footer from "@/modules/common/components/footer";

interface ContactCardProps {
    title: string;
    children: React.ReactNode;
    iconName: IconsName;
}

const ContactCard = ({ title, children, iconName }: ContactCardProps) => {
    return (
        <Card className="flex flex-row shadow-none w-[400px] min-h-28">
            <CardHeader className="p-0 mr-4">
                <div className="w-20 h-20 rounded-full bg-primary p-6">
                    <IconByName name={iconName} size={35} />
                </div>
            </CardHeader>
            <CardContent className="px-0">
                <Typography as="h3" className="text-xl lg:text-xl mb-3">
                    {title}
                </Typography>
                {children}
            </CardContent>
        </Card>
    );
};

const ServicesPage = () => {
    return (
        <>
            <div
                className="h-[400px] md:h-[500px] bg-cover bg-center bg-no-repeat"
                // TODO: remove inline styles
                style={{
                    backgroundImage: `url('/images/contact-us-hero.webp')`,
                }}
            >
                <NavBar variant="transparent" />
                <h1 className="text-white font-bold text-5xl md:text-6xl text-center mt-16 md:mt-20">
                    Contáctanos
                </h1>
            </div>

            <div className="absolute w-full -translate-y-36 md:-translate-y-48">
                <section className="container max-w-[1430px] mb-20">
                    <div
                        className={cn(
                            "flex flex-col md:flex-row h-full bg-white px-10 py-8 gap-14 shadow-lg rounded-3xl",
                        )}
                    >
                        <header className="w-full h-[216px] md:w-[380px] md:h-[648px]">
                            <iframe
                                className="h-full w-full border-none rounded-3xl"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.0712377769598!2d-70.67964441851159!3d19.449423074032545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1cf6614b435fb%3A0x33203f82754afa37!2sDental%20Place!5e0!3m2!1sen!2sdo!4v1721837521235!5m2!1sen!2sdo"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </header>
                        <form className="flex flex-col w-full h-full md:h-[745px] gap-11">
                            <div className="flex gap-6 flex-col md:flex-row">
                                <Label className="w-full">
                                    <span className="text-2xl font-bold">
                                        Tu nombre
                                    </span>
                                    <Input
                                        type="text"
                                        variant="info"
                                        sizes="lg"
                                        placeholder="Tu nombre"
                                    />
                                </Label>
                                <Label className="w-full">
                                    <span className="text-2xl font-bold">
                                        Tu Email
                                    </span>
                                    <Input
                                        type="text"
                                        variant="info"
                                        sizes="lg"
                                        placeholder="Tu Email"
                                    />
                                </Label>
                            </div>
                            <Label className="w-full">
                                <span className="text-2xl font-bold">
                                    Número de teléfono
                                </span>
                                <Input
                                    type="text"
                                    variant="info"
                                    sizes="lg"
                                    placeholder="Número de teléfono"
                                />
                            </Label>
                            <Label>
                                <span className="text-2xl font-bold">
                                    Escribenos aquí...
                                </span>
                                <Textarea
                                    className="rounded-3xl h-[314px] resize-none"
                                    variant="info"
                                    sizes="lg"
                                    placeholder="Escribenos aquí..."
                                />
                            </Label>
                            <div className="w-full flex justify-end">
                                <Button
                                    variant="dark"
                                    className="w-fit py-6 px-14"
                                >
                                    Enviar
                                </Button>
                            </div>
                        </form>
                    </div>
                </section>
                <section className="container max-w-[1430px] mb-20">
                    <div className="flex flex-row flex-wrap gap-10 lg:gap-6 justify-between">
                        <ContactCard title="Headquaters" iconName="MapPin">
                            <Typography as="p" className="line-clamp-5">
                                Calle Genaro Pérez.10, Rincón Largo Villa Olga
                                Calle, Lic. Genaro Perez 10, Santiago de los
                                Caballeros 51000
                            </Typography>
                        </ContactCard>
                        <ContactCard title="Email" iconName="Mail">
                            <Typography
                                as="a"
                                className="line-clamp-5 underline"
                                href="mailto:info@dentalplacerd.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                info@dentalplacerd.com
                            </Typography>
                        </ContactCard>
                        <ContactCard title="Phone Number" iconName="Phone">
                            <Typography as="p" className="line-clamp-5">
                                (809) 581-8686
                            </Typography>
                        </ContactCard>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
};

export default ServicesPage;
