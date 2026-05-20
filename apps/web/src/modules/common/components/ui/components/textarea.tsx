import * as React from "react";

import { cn } from "@ui/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        VariantProps<typeof textareaVariants> {}

const textareaVariants = cva(
    "flex w-full rounded-2xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-normal",
    {
        variants: {
            variant: {
                default: "placeholder:text-muted-foreground bg-input",
                info: "placeholder:text-muted-foreground bg-info",
            },
            sizes: {
                default: "h-10 px-4 py-2",
                lg: "min-h-[10rem] px-5 py-4",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            sizes: "default",
        },
    },
);

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, variant, sizes, ...props }, ref) => {
        return (
            <textarea
                className={cn(textareaVariants({ variant, sizes, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Textarea.displayName = "Textarea";

export { Textarea };
