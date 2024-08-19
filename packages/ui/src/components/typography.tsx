import type { ElementType, ComponentProps, ForwardedRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@ui/lib/utils";

export type PolymorphicProps<
    OwnProps,
    As extends ElementType,
    DefaultElement extends ElementType,
> = OwnProps &
    (
        | (Omit<ComponentProps<As>, "as"> & { as?: As })
        | (Omit<ComponentProps<As>, "as"> & { as: As })
        | (Omit<ComponentProps<DefaultElement>, "as"> & { as?: never })
    );

const tagVariants: any = {
    h1: "text-3xl md:text-4xl xl:text-6xl font-bold",
    h2: "text-3xl lg:text-4xl font-bold tracking-tight",
    h3: "text-2xl lg:text-3xl font-extrabold tracking-tight",
    h4: "text-xl font-extrabold",
    h5: "text-lg lg:text-xl",
    p: "text-base",
};

export const colorVariants = {
    primary: "text-primary",
    "dark-primary": "text-dark-primary",
    dark: "text-dark",
    black: "text-black",
    secondary: "text-secondary",
    info: "text-info",
    "light-info": "text-light-info",
    link: "text-link",
    "dark-grey": "text-dark-grey",
};

const defaultElement = "p";

type OwnProps = {};

type TypographyProps<As extends ElementType = typeof defaultElement> =
    PolymorphicProps<OwnProps, As, typeof defaultElement> & {
        color?: keyof typeof colorVariants;
        asChild?: boolean;
    };

export const Typography = <As extends ElementType = typeof defaultElement>({
    color,
    as,
    className,
    children,
    asChild,
    ...props
}: TypographyProps<As>) => {
    const classes = cn(
        "font-noto-sans",
        colorVariants[color || "black"],
        tagVariants[as],
        className,
    );

    const Component = asChild ? Slot : as || defaultElement;

    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
};
