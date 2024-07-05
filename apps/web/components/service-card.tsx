import React from "react";
import { Typography } from "@minnek/ui/components/typography";
import {
    Card,
    CardHeader,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@minnek/ui/components/card";
import { IconByName, type IconsName, ArrowRight } from "@minnek/ui/icons";

import { Button } from "@minnek/ui/components/button";

type ServiceCardProps = {
    title: string;
    description: string;
    icon?: IconsName;
    link: string;
    href?: string;
    iconSize?: number;
};

const serviceCard = ({
    title,
    description,
    icon,
    link,
    iconSize = 35,
    href = "#",
}: ServiceCardProps) => {
    return (
        <Card className="bg-info w-72">
            <CardHeader>
                {icon && typeof icon === "string" && (
                    <Button variant="info" size="icon" className="p-4">
                        <IconByName name={icon} size={iconSize} />
                    </Button>
                )}
                <CardTitle>
                    <Typography as="span" className="text-2xl">
                        {title}
                    </Typography>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Typography as="p" className="line-clamp-5">
                    {description}
                </Typography>
            </CardContent>
            <CardFooter>
                <Button variant="link" size="link" asChild>
                    <Typography as="a" href={href} className="flex gap-2">
                        {link}
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
