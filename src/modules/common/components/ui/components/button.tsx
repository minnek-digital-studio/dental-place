import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@ui/lib/utils";

const buttonVariants = cva(
    "items-center justify-center whitespace-nowrap rounded-full text-sm font-extrabold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:opacity-80 transition-opacity duration-200 flex gap-2 font-noto-sans",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground",
                dark: "bg-dark text-dark-foreground hover:opacity-80 font-bold",
                outline:
                    "border border-light bg-background hover:bg-dark hover:text-dark-foreground transition-colors hover:opacity-100",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                info: "bg-dark-info text-dark-info-foreground",
                "light-info": "bg-light-info text-light-info-foreground",
                link: "text-link text-base font-normal underline-offset-4 hover:underline ",
                transparent:
                    "bg-transparent text-primary-foreground border border-white hover:bg-white hover:opacity-100 hover:text-primary-foreground transition-colors",
                "transparent-dark":
                    "bg-transparent text-primary-foreground border border-dark",
                light: "bg-white text-black hover:bg-gray-100",
                grey: "bg-dark-grey/10 hover:bg-dark-grey/[0.09]",
            },
            size: {
                default: "h-10 px-9 py-2",
                sm: "h-9 px-5 font-medium",
                lg: "h-11 px-8",
                xl: "h-10 px-11 py-6",
                icon: "size-max min-h-8 min-w-8",
                link: "h-min w-min px-0 py-0",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        ButtonVariants {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = "Button";

export { Button, buttonVariants };
