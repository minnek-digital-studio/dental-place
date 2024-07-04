
import { Input } from "@minnek/ui/components/input";
import { Textarea } from "@minnek/ui/components/textarea";
import { Label } from "@minnek/ui/components/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@minnek/ui/components/select";

export default function Components() {
    return (
        <main className="w-full h-screen flex justify-center items-center">
            <div className="flex gap-40">
                <section className="flex flex-col gap-6">
                    <h3>Inputs</h3>
                    <Label>
                        <span>Name</span>
                        <Input type="text" placeholder="Input" />
                    </Label>
                    <Label>
                        <span>Name</span>
                        <Input type="text" variant="info" sizes="lg" placeholder="Input" />
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
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Label>
                    <Label>
                        <span>Fruits</span>
                        <Select>
                            <SelectTrigger >
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
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
                        <Textarea variant="info" sizes="lg" placeholder="Message" />
                    </Label>
                </section>

            </div>
        </main>
    );
}
