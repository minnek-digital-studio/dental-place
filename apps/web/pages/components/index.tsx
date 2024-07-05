
import { Input } from "@minnek/ui/components/input";
import { Button } from "@minnek/ui/components/button";

export default function Components() {
    return (
        <main className="w-full h-screen flex flex-col justify-center items-center gap-4">
            <div>
                <h1>Buttons</h1>
                <div className="flex gap-6">
                    <Button variant="secondary">View More</Button>
                    <Button variant="secondary" size="sm">📞 (809) 581-8686</Button>
                    <Button variant="secondary" size="icon">📞</Button>
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
                        <a href="#">Learn More</a>
                    </Button>
                    <Button variant="outline">Agendar</Button>
                </div>
            </div>
        </main>
    );
}
