import React from "react";
import type { ButtonType } from "@/modules/common/types";
import { Button } from "@ui/components/button";
import { IconByName } from "@ui/components/icons";

import Link from "@/modules/common/components/link";
import { Typography } from "@ui/components/typography";
import { cn } from "@ui/lib/utils";
import { Card, CardContent } from "@ui/components/card";

import Buttons from "@/modules/home/components/buttons";

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
                "w-full max-w-[25rem] md:h-[7.5rem] md:max-w-[46rem] justify-center items-center shadow-card max-md:bg-transparent max-md:shadow-none",
                className,
            )}
            {...props}
        >
            <CardContent className="flex flex-col md:flex-row gap-4 justify-center items-center py-4 text-center md:text-left max-md:px-0 max-md:py-2 max-md:w-full">
                <Typography as="p" className="font-bold md:w-1/2 max-md:hidden">
                    {title}
                </Typography>
                <Buttons buttons={buttons} />
            </CardContent>
        </Card>
    );
};

export default PresentationCard;
