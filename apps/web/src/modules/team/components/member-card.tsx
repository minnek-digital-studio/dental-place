import React from "react";
import type { ImageType, ButtonType } from "@/modules/common/types";
import { Image } from "@/modules/common/components/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
    CardHeader,
    CardFooter,
} from "@minnek/ui/components/card";
import { Button } from "@minnek/ui/components/button";
import Link from "next/link";
import { Typography } from "@minnek/ui/components/typography";
import { cn } from "@minnek/ui/lib/utils";
import { IconByName } from "@minnek/ui/icons";

export interface TeamMemberCard extends React.HTMLAttributes<HTMLDivElement> {
    id: string;
    name: string;
    specialty: string;
    img: ImageType;
    button: ButtonType;
    socialLinks: ButtonType[];
}

const MemberCard = ({
    id,
    name,
    specialty,
    img,
    button,
    socialLinks,
    className,
    ...props
}: TeamMemberCard) => {
    const { text: buttonText, ...buttonProps } = button;
    return (
        <Card
            {...props}
            className={cn("max-w-80 w-full shadow-team-card h-full", className)}
        >
            <CardHeader className="flex items-center w-full px-6">
                <picture className="bg-secondary/25 rounded-full max-w-40">
                    <Image {...img} />
                </picture>
            </CardHeader>
            <CardContent className="text-center flex flex-col gap-3 px-6 flex-none">
                <Typography as="h3" className="text-lg lg:text-lg">
                    {name}
                </Typography>
                <Typography as="p" className="text-dark-grey px-1">
                    {specialty}
                </Typography>
                <div className="flex gap-5 w-full justify-center mt-1">
                    {socialLinks.map(
                        ({ link, icon, text, className, ...props }) => (
                            <Button
                                asChild
                                {...props}
                                key={id}
                                aria-label={text}
                                className={cn("size-10", className)}
                            >
                                <Link key={text} href={link}>
                                    <IconByName {...icon} />
                                </Link>
                            </Button>
                        ),
                    )}
                </div>
            </CardContent>
            <CardFooter className="flex justify-center px-6">
                <Button {...buttonProps}>{buttonText}</Button>
            </CardFooter>
        </Card>
    );
};

export default MemberCard;
