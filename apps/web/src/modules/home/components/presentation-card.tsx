import React from "react";
import type { ButtonType } from "@/modules/common/types";
import { Button } from "@minnek/ui/components/button";
import { IconByName } from "@minnek/ui/icons";

import Link from "next/link";
import { Typography } from "@minnek/ui/components/typography";
import { cn } from "@minnek/ui/lib/utils";
import { Card, CardContent } from "@minnek/ui/components/card";

export interface PresentationCardProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    buttons: ButtonType[];
}

const PresentationCard = ({
    title,
    buttons,
    className,
    ...props
}: PresentationCardProps) => {
    return (
        <Card
            className={cn(
                "w-full max-w-[25rem] md:h-[7.5rem] md:max-w-[46rem] justify-center items-center shadow-card",
                className,
            )}
            {...props}
        >
            <CardContent className="flex flex-col md:flex-row gap-4 justify-center items-center py-4 text-center md:text-left ">
                <Typography as="p" className="font-bold md:w-1/2">
                    {title}
                </Typography>
                <div className="flex items-center justify-center flex-wrap md:flex-nowrap gap-4">
                    {buttons.map(
                        ({ icon, link, text, className, ...buttonProps }) => (
                            <Button
                                {...buttonProps}
                                className={cn("", className)}
                                key={crypto.randomUUID()}
                                asChild
                            >
                                <Link
                                    href={link}
                                    aria-label={text}
                                    className="font-bold flex-1 w-full max-w-40"
                                >
                                    {icon?.position === "left" && (
                                        <IconByName {...icon} />
                                    )}
                                    <Typography
                                        as="span"
                                        className="text-inherit"
                                    >
                                        {text}
                                    </Typography>
                                    {icon?.position !== "left" && (
                                        <IconByName {...icon} />
                                    )}
                                </Link>
                            </Button>
                        ),
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default PresentationCard;
