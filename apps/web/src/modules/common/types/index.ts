import { type ButtonVariants } from "@minnek/ui/components/button";

export type ButtonType = {
    text: string;
    link: string;
    variant: ButtonVariants["variant"];
    size: ButtonVariants["size"];
    className?: string;
};

export type ImageType = {
    src: string;
    alt: string;
    className?: string;
};
