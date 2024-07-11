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
                "w-full max-w-[25rem] md:h-28 md:max-w-[46rem] justify-center items-center shadow-md",
                className,
            )}
            {...props}
        >
            <CardContent className="flex flex-col md:flex-row gap-4 justify-center items-center py-4 text-center md:text-left ">
                <Typography as="p" className="font-bold md:w-1/2">
                    {title}
                </Typography>
                <div className="flex items-center justify-center flex-wrap md:flex-nowrap gap-4 ">
                    {buttons.map(
                        ({ icon, link, text, className, ...buttonProps }) => (
                            <Link key={crypto.randomUUID()} href={link}>
                                <Button
                                    {...buttonProps}
                                    className={cn("", className)}
                                >
                                    {text}
                                    <IconByName {...icon} />
                                </Button>
                            </Link>
                        ),
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default PresentationCard;
