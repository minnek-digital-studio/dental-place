import { Typography } from "@ui/components/typography";
import ServiceCard from "@/modules/common/components/service-card";
import { Input } from "@ui/components/input";
import { Textarea } from "@ui/components/textarea";
import { Label } from "@ui/components/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@ui/components/select";
import { Button } from "@ui/components/button";
import {
    CleanTooth,
    CarieTooth,
    ServiceTooth,
    MoveRight,
    Check,
    IconByName,
} from "@ui/components/icons";
import { Metadata } from "next";
import ClientQueryTest from "../components/clients-query-test";
import FormTest from "@/modules/docs/components/form-test";

export const metadata: Metadata = {
    title: "Docs | Dental Place",
    description: "Internal component library and design system documentation for Dental Place.",
};

export default async function Docs() {
    return (
        <main className="w-full flex flex-col justify-center items-center gap-4">
            <section className="min-h-screen flex flex-col items-center justify-center gap-6 pt-6">
                <div className="container">
                    <h1>Contact Form 7</h1>
                    <div className="container flex">
                        <FormTest />
                    </div>
                </div>
                <ClientQueryTest />
                <div>
                    <h1>Cards</h1>
                    <div className="flex gap-4">
                        <ServiceCard
                            title="Odontología General"
                            summary="Lörem ipsum ogooglebar paratenat antiprepal.  Soderat saling supranedusaska, prede. Lörem ipsum ogooglebar paratenat antiprepal."
                            button={{
                                text: "Learn more about Odontología General",
                                link: "#",
                                variant: "info",
                                size: "default",
                            }}
                            icon="CleanTooth"
                            className="bg-info"
                        />

                        <ServiceCard
                            title="Endodoncia"
                            summary="Lörem ipsum ogooglebar paratenat antiprepal.  Soderat saling supranedusaska, prede. Lörem ipsum ogooglebar paratenat antiprepal."
                            button={{
                                text: "Learn more about Endodoncia",
                                link: "#",
                                variant: "info",
                                size: "default",
                            }}
                            icon="ServiceTooth"
                            className="border"
                        />

                        <ServiceCard
                            title="Odontología Estética"
                            summary="Lörem ipsum ogooglebar paratenat antiprepal.  Soderat saling supranedusaska, prede. Lörem ipsum ogooglebar paratenat antiprepal."
                            button={{
                                text: "Learn more about Odontología Estética",
                                link: "#",
                                variant: "info",
                                size: "default",
                            }}
                            icon="CarieTooth"
                            className="bg-info"
                        />
                    </div>
                </div>
            </section>
            <section className="min-h-screen flex flex-col items-center justify-center gap-6">
                <div>
                    <h1>Icons</h1>
                    <div className="flex gap-6">
                        <CleanTooth size={60} className="text-link" />
                        <MoveRight size={60} />
                        <CarieTooth size={60} />
                        <ServiceTooth size={60} />
                        <Check size={60} className="text-lime-600" />
                        <IconByName
                            name="CarieTooth"
                            size={60}
                            className="text-link"
                        />
                    </div>
                </div>
            </section>
            <section className="min-h-screen flex flex-col items-center justify-center gap-6">
                <div>
                    <h1>Typography</h1>
                    <div className="flex gap-6">
                        <Typography as="h1">h1</Typography>

                        <Typography as="h2">h2</Typography>

                        <Typography as="h3" className="font-bold">
                            h3
                        </Typography>

                        <Typography as="h4" color="link">
                            h4
                        </Typography>

                        <Typography as="p">p</Typography>
                    </div>
                </div>
            </section>
            <section className="min-h-screen flex flex-col items-center justify-center gap-6">
                <div>
                    <h1>Buttons</h1>
                    <div className="flex gap-6">
                        <Button variant="secondary">View More</Button>
                        <Button variant="secondary" size="sm">
                            📞 (809) 581-8686
                        </Button>
                        <Button variant="secondary" size="icon">
                            📞
                        </Button>
                        <Button variant="dark">Enviar</Button>
                        <Button variant="outline">Agendar</Button>
                    </div>
                </div>

                <div>
                    <h1>Buttons</h1>
                    <div className="flex gap-6 items-center">
                        <Button variant="info">View More</Button>
                        <Button variant="light-info">View More</Button>
                        <Button size="icon">📞</Button>
                        <Button variant="link" size="link" asChild>
                            <a href="#" aria-label="Learn more about our services">Learn More</a>
                        </Button>
                        <Button disabled variant="dark">
                            Agendar
                        </Button>
                    </div>
                </div>
            </section>
            <div className="flex gap-40 mb-28">
                <section className="flex flex-col gap-6">
                    <h3>Inputs</h3>
                    <Label>
                        <span>Name</span>
                        <Input type="text" placeholder="Input" />
                    </Label>
                    <Label>
                        <span>Name</span>
                        <Input
                            type="text"
                            variant="info"
                            sizes="lg"
                            placeholder="Input"
                        />
                    </Label>
                </section>

                <section className="flex flex-col gap-6">
                    <h3>Select</h3>
                    <Label>
                        <span>Fruits</span>
                        <Select>
                            <SelectTrigger sizes="lg" variant="info">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">
                                        Banana
                                    </SelectItem>
                                    <SelectItem value="blueberry">
                                        Blueberry
                                    </SelectItem>
                                    <SelectItem value="grapes">
                                        Grapes
                                    </SelectItem>
                                    <SelectItem value="pineapple">
                                        Pineapple
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Label>
                    <Label>
                        <span>Fruits</span>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">
                                        Banana
                                    </SelectItem>
                                    <SelectItem value="blueberry">
                                        Blueberry
                                    </SelectItem>
                                    <SelectItem value="grapes">
                                        Grapes
                                    </SelectItem>
                                    <SelectItem value="pineapple">
                                        Pineapple
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Label>
                </section>

                <section className="flex flex-col gap-6">
                    <h3>Textarea</h3>
                    <Label>
                        <span>Message</span>
                        <Textarea placeholder="Message" />
                    </Label>
                    <Label>
                        <span>Message</span>
                        <Textarea
                            variant="info"
                            sizes="lg"
                            placeholder="Message"
                        />
                    </Label>
                </section>
            </div>
        </main>
    );
}
