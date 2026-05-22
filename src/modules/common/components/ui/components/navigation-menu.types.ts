import { cva } from "class-variance-authority";

export const navigationMenuTriggerStyle = cva(
    "group inline-flex h-10 w-max items-center justify-center px-2 py-2 text-sm font-normal border-b-2 border-transparent transition-colors hover:border-primary-foreground hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:border-primary-foreground",
    {
        variants: {
            direction: {
                row: "",
                column: "w-full justify-start",
            },
        },
        defaultVariants: {
            direction: "row",
        },
    },
);
