import { cn } from "@ui/lib/utils";
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@ui/components/accordion";
import { Typography } from "@ui/components/typography";
import { Plus } from "@ui/components/icons";
import { Button } from "@ui/components/button";

export interface AskSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    questions: Question[];
}

type Question = {
    id: string;
    question: string;
    answer: string;
};

const AskSection = ({
    title,
    description,
    questions,
    className,
    ...props
}: AskSectionProps) => {
    return (
        <section
            className={cn(
                "flex flex-col gap-10 container justify-center items-center",
                className,
            )}
            {...props}
        >
            <Typography as="h2" className="text-center">
                {title}
            </Typography>
            {description && <Typography as="p">{description}</Typography>}
            <Accordion type="single" collapsible className="w-full max-w-xl">
                {questions.map(({ question, answer, id }) => (
                    <AccordionItem key={id} value={id} className="border-b">
                        <AccordionTrigger className="[&[data-state=open]>div>svg]:rotate-45 [&[data-state=open]>div]:opacity-100">
                            <Typography as="h3">{question}</Typography>
                            <Button
                                asChild
                                size={"icon"}
                                className="bg-[#8065C2] opacity-45 min-h-6 min-w-6"
                            >
                                <div className="flex items-center justify-center w-max">
                                    <Plus
                                        className="transition-transform duration-200 text-white"
                                        size={17}
                                    />
                                </div>
                            </Button>
                        </AccordionTrigger>
                        <AccordionContent>
                            <Typography
                                as="p"
                                className="leading-7 text-[#434040]"
                            >
                                {answer}
                            </Typography>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
};

export default AskSection;
