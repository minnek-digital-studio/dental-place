import React from "react";
import Layout from "@/modules/common/layouts/layout";
import { cn } from "@minnek/ui/lib/utils";
import { Label } from "@minnek/ui/components/label";
import { Input } from "@minnek/ui/components/input";
import { Textarea } from "@minnek/ui/components/textarea";
import { Button } from "@minnek/ui/components/button";
import { Card, CardContent, CardHeader } from "@minnek/ui/components/card";
import { Typography } from "@minnek/ui/components/typography";
import { IconByName } from "@minnek/ui/components/icons/index";

const ContactCard = () => {
    return (
        <Card className="flex">
            <CardHeader>
                <IconByName className="rounded-full bg-primary m-6" name="ServiceTooth" size={35} />
            </CardHeader>
            <CardContent>
                <Typography as="h3" className="text-xl lg:text-xl">
                    Phone Number
                </Typography>
                <Typography as="p" className="line-clamp-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nisi.
                </Typography>
            </CardContent>
        </Card>
    )
}

const ServicesPage = () => {
    return (
        <Layout
        // navbarVariant={{
        //     variant: "info",
        // }}
        >
            <h1>Contáctanos</h1>
            <section className="container max-w-[1430px] mb-20">
                {/* <section className="container max-xl:pl-0 max-xl:pr-0"> */}
                {/* two cols, one left with the map and another on right with a form */}
                <div className={cn(
                    "flex flex-col md:flex-row h-full bg-white px-10 py-8 gap-14 shadow-lg rounded-3xl",
                )}>
                    <header className="block w-full h-[216px] md:w-[380px] md:h-[648px] rounded-3xl bg-red-300"></header>
                    <form className="flex flex-col w-full h-full md:h-[745px] gap-11">
                        <div className="flex gap-6 flex-col md:flex-row">
                            <Label className="w-full">
                                <span className="text-2xl font-bold">Tu nombre</span>
                                <Input
                                    type="text"
                                    variant="info"
                                    sizes="lg"
                                    placeholder="Tu nombre"
                                />
                            </Label>
                            <Label className="w-full">
                                <span className="text-2xl font-bold">Tu Email</span>
                                <Input
                                    type="text"
                                    variant="info"
                                    sizes="lg"
                                    placeholder="Tu Email"
                                />
                            </Label>
                        </div>
                        <Label className="w-full">
                            <span className="text-2xl font-bold">Número de teléfono</span>
                            <Input
                                type="text"
                                variant="info"
                                sizes="lg"
                                placeholder="Número de teléfono"
                            />
                        </Label>
                        <Label>
                            <span className="text-2xl font-bold">Escribenos aquí...</span>
                            <Textarea
                                className="rounded-3xl h-[314px] resize-none"
                                variant="info"
                                sizes="lg"
                                placeholder="Escribenos aquí..."
                            />
                        </Label>
                        <div className="w-full flex justify-end">
                            <Button variant="dark" className="w-fit py-6 px-14">Enviar</Button>
                        </div>
                    </form>
                </div>
            </section>
            <section className="container max-w-[1430px] mb-20">
                <div className="flex flex-col md:flex-row gap-6">
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                </div>
            </section>
        </Layout>
    );
};

export default ServicesPage;
