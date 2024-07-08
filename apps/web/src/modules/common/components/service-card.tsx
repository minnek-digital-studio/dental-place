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
    description: string;
    icon?: IconsName;
    button: buttonProps;
    iconSize?: number;
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
    description,
    icon,
    iconSize = 35,
    button,
    className,
}: ServiceCardProps) => {
    return (
        <Card className={cn("w-72", className)}>
            <CardHeader>
                {icon && typeof icon === "string" && (
                    <Button variant="info" size="icon" className="p-4">
                        <IconByName name={icon} size={iconSize} />
                    </Button>
                )}
                <Typography as="h4">{title}</Typography>
            </CardHeader>
            <CardContent>
                <Typography as="p" className="line-clamp-5">
                    {description}
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
