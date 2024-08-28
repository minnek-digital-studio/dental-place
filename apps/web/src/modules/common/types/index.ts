import { type ButtonVariants } from "@minnek/ui/components/button";
import { type IconsName } from "@minnek/ui/icons";
import { ComponentType } from "../utils/CallToActions";

export type ButtonType = {
    text: string;
    link: string;
    variant: ButtonVariants["variant"];
    size: ButtonVariants["size"];
    className?: string;
    icon?: Icon;
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
    position?: "left" | "right";
};

export type Author = {
    name: string;
    img: ImageType;
};

export type CallToAction = {
    title: string;
    description?: string;
    type?: ComponentType;
    button: ButtonType;
    img: ImageType;
    className?: string;
    items: Array<{
        title: string;
        description: string;
        icon: Icon;
    }>;
};
