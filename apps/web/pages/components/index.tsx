
import { Input } from "@minnek/ui/components/input";
import { Button } from "@minnek/ui/components/button";

export default function Components() {
    return (
        <main className="w-full h-screen flex justify-center items-center">
            <div>
                <h1>Inputs</h1>
                <Input type="text" placeholder="Input" />
                <Button>Button</Button>
            </div>
        </main>
    );
}
