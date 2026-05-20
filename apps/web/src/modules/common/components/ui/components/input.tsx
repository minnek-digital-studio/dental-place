import * as React from "react";

import { cn } from "../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
    "flex w-full rounded-full border border-input bg-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-normal",
    {
        variants: {
            variant: {
                default: "placeholder:text-muted-foreground bg-input",
                info: "placeholder:text-muted-foreground bg-info",
                light: "placeholder:text-muted-foreground bg-white",
            },
            sizes: {
                default: "h-10 px-4 py-2",
                lg: "h-11 px-5 py-6",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            sizes: "default",
        },
    },
);

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputVariants> {}

export type InputVariants = VariantProps<typeof inputVariants>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, sizes, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(inputVariants({ variant, sizes, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Input.displayName = "Input";

export { Input };
