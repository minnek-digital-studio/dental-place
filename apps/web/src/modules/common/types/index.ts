import { type ButtonVariants } from "@minnek/ui/components/button";
import { type IconsName } from "@minnek/ui/icons";

export type ButtonType = {
    text: string;
    link: string;
    variant: ButtonVariants["variant"];
    size: ButtonVariants["size"];
    className?: string;
    icon: Icon;
};

export type ImageType = {
    src?: string;
    alt?: string;
    className?: string;
    href?: string;
};

export type Icon = {
    name: IconsName;
    size: number;
    className?: string;
};
