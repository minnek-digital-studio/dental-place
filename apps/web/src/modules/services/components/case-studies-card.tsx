import React from "react";
import { Image } from "@/modules/common/components/image";
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
} from "@minnek/ui/components/card";
import type { ImageType, ButtonType } from "@/modules/common/types";
import { Button } from "@minnek/ui/components/button";
import Link from "next/link";
import { cn } from "@minnek/ui/lib/utils";
import { Typography } from "@minnek/ui/components/typography";

export interface CaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    image: ImageType;
    button: ButtonType;
}

const CaseCard = ({
    title,
    description,
    image,
    button,
    className,
    ...props
}: CaseCardProps) => {
    return (
        <Card
            {...props}
            className={cn(
                "bg-transparent font-noto-sans w-full shadow-none",
                className,
            )}
        >
            <CardHeader className="px-0 py-0">
                <picture className="rounded-2xl overflow-hidden">
                    <Image {...image} />
                </picture>
            </CardHeader>
            <CardContent className="px-0">
                <Typography as="h3" className="lg:text-2xl">
                    {title}
                </Typography>
                <Typography as="p">{description}</Typography>
            </CardContent>
            <CardFooter className="px-0 py-0">
                <Button {...button} asChild>
                    <Link href={button.link} aria-label={button.text}>
                        {button.text}
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CaseCard;
