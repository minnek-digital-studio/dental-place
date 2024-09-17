import { Label } from "@minnek/ui/components/label";
import { Input } from "@minnek/ui/components/input";
import { Textarea } from "@minnek/ui/components/textarea";
import { Button } from "@minnek/ui/components/button";

const ContactForm = () => {
    return (
        <form className="flex flex-col w-full h-full max-h-max gap-8">
            <div className="flex gap-6 flex-col md:flex-row">
                <Label className="w-full">
                    <span className="text-2xl font-bold">Nombre</span>
                    <Input
                        type="text"
                        variant="info"
                        sizes="lg"
                        placeholder="Tu nombre"
                        className="border-0 border-none h-14"
                    />
                </Label>
                <Label className="w-full">
                    <span className="text-2xl font-bold">Email</span>
                    <Input
                        type="email"
                        variant="info"
                        sizes="lg"
                        placeholder="Tu Email"
                        className="border-0 border-none h-14"
                    />
                </Label>
            </div>
            <Label className="w-full">
                <span className="text-2xl font-bold">Número de teléfono</span>
                <Input
                    type="tel"
                    variant="info"
                    sizes="lg"
                    placeholder="Número de teléfono"
                    className="border-0 border-none h-14"
                />
            </Label>
            <Label className="">
                <span className="text-2xl font-bold">Mensaje</span>
                <Textarea
                    className="rounded-3xl h-[10rem] resize-none border-0 border-none"
                    variant="info"
                    sizes="lg"
                    placeholder="Escribenos aquí..."
                />
            </Label>
            <div className="w-full flex justify-end">
                <Button
                    variant="dark"
                    className="w-fit py-7 px-14 text-xl font-bold"
                >
                    Enviar
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;
