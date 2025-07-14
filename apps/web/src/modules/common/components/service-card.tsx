import React from "react";
import { Typography } from "@minnek/ui/components/typography";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
} from "@minnek/ui/components/card";
import { IconByName, type IconsName, ArrowRight } from "@minnek/ui/icons";
import { cn } from "@minnek/ui/lib/utils";
import { Button, type ButtonVariants } from "@minnek/ui/components/button";

export type ServiceCardProps = {
    title: string;
    summary: string;
    slug?: string;
    icon?: IconsName;
    button: buttonProps;
    iconsize?: number;
    className?: string;
};

export type buttonProps = {
    text: string;
    link: string;
    variant: ButtonVariants["variant"];
    size: ButtonVariants["size"];
};

const serviceCard = ({
    title,
    summary,
    icon,
    iconsize = 35,
    button,
    className,
}: ServiceCardProps) => {
    return (
        <Card className={cn("max-w-[19rem] w-full h-full", className)}>
            <CardHeader>
                {icon && typeof icon === "string" && (
                    <Button variant="info" size="icon" className="p-4" asChild>
                        <div aria-hidden>
                            <IconByName name={icon} size={iconsize} />
                        </div>
                    </Button>
                )}
                <Typography as="h3" className="text-xl lg:text-xl">
                    {title}
                </Typography>
            </CardHeader>
            <CardContent>
                <Typography as="p" className="line-clamp-5">
                    {summary}
                </Typography>
            </CardContent>
            <CardFooter>
                <Button variant={button.variant} size={button.size} asChild>
                    <Typography
                        as="a"
                        href={button.link}
                        className="flex gap-2"
                    >
                        {button.text}
                        <ArrowRight
                            size={15}
                            className="underline-offset-4 hover:underline"
                        />
                    </Typography>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default serviceCard;
