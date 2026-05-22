"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@ui/lib/utils";

export { AccordionTrigger } from "./accordion-trigger";
export { AccordionContent } from "./accordion-content";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn("", className)}
        {...props}
    />
));
AccordionItem.displayName = "AccordionItem";

export { Accordion, AccordionItem };
